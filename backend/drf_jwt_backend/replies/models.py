from django.db import models
from django.contrib.auth.models import User
from comments.models import Comment


class Replies(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, blank=True, null=True, on_delete=models.CASCADE)
    text = models.CharField(max_length=100)