from django.shortcuts import render
from rest_framework.decorators import APIView
from comments.models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class CommentList(APIView):

    def get(self, request, video_id):
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    