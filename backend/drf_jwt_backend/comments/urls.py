from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/', views.CommentList.as_view()),
    path('', views.CommentDetail.as_view()),
    path('update/<int:comment_id>/', views.CommentUpdate.as_view()),
]