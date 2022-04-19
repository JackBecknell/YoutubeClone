from django.shortcuts import render
from rest_framework.decorators import APIView
from comments.models import Comment
from .serializers import CommentSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.http import Http404

from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

class CommentList(APIView, AllowAny):

    def get(self, request, video_id):
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CommentDetail(APIView, IsAuthenticated):

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentUpdate(APIView, IsAuthenticated):

    def put(self, request, comment_id, format=None):
        comment = Comment.objects.get(id=comment_id)
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetUserByCommentId(APIView, AllowAny):
    def get(self, request, comment_id):
        comment = Comment.objects.get(id = comment_id)
        serializer = UserSerializer(comment.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CommentLike(APIView, IsAuthenticated):
    def get_object(self, comment_id):
        try:
            return Comment.objects.get(id=comment_id)
        except Comment.DoesNotExist:
            raise Http404

    def put(self, request, comment_id):
        comment = self.get_object(comment_id)
        print(comment)
        comment.likes += 1
        comment.save()
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

class CommentDislike(APIView, IsAuthenticated):
    def get_object(self, comment_id):
        try:
            return Comment.objects.get(id=comment_id)
        except Comment.DoesNotExist:
            raise Http404

    def put(self, request, comment_id):
        comment = self.get_object(comment_id)
        print(comment)
        comment.dislikes += 1
        comment.save()
        serializer = CommentSerializer(comment)
        return Response(serializer.data)