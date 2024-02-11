from django.urls import path
from . import views

urlpatterns = [
    path('notes/',views.get_notes,name="get_notes"),
    path('notes/<str:pk>',views.get_note,name="get_note"),
    path('notes/<str:pk>/delete/',views.delete_note,name="delete_note"),
    path('notes/<str:pk>/update/',views.update_note,name="update_note"),
    path('note-create/',views.create_note,name="create_note"),
]
