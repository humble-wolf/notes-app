from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import NoteViewSet, AudioNoteViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'notes', NoteViewSet, basename='note')
router.register(r'audio-notes', AudioNoteViewSet, basename='audio-note')

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)