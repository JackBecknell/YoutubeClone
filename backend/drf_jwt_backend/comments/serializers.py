from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Comment

class UserSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'video_id', 'text', 'likes', 'dislikes', 'user_id']
        