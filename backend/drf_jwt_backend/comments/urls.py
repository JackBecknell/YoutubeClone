from django.urls import path
from . import views

urlpatterns = [
    path('<str:pk>/', views.CommentList.as_view()),
]