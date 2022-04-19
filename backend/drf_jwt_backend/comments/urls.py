from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/', views.CommentList.as_view()),
    path('', views.CommentDetail.as_view()),
    path('update/<int:comment_id>/', views.CommentUpdate.as_view()),
    path('user/<int:comment_id>/', views.GetUserByCommentId.as_view()),
    path('like/<int:comment_id>/', views.CommentLike.as_view()),
]