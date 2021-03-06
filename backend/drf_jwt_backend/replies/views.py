from django.shortcuts import render
from rest_framework.decorators import APIView
from replies.models import Replies
from comments.models import Comment
from .serializers import ReplySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.



# This is totally botched rework in the future
class ReplyList(APIView, IsAuthenticated):

    def get(self, request, pk):
        replies = Replies.objects.filter(comment_id=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReplyPost(APIView, IsAuthenticated):

    def post(self, request):
        serializer = ReplySerializer(data=request.data)
        print("User: ", request.user)
        print("Request: " + str(request.data))
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


