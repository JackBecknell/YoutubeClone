from rest_framework import serializers
from .models import Replies
from django.contrib.auth.models import User

class UserSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id', 'text', 'comment', 'user']