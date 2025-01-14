from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class AudioNote(models.Model):
    note = models.ForeignKey(Note, on_delete=models.CASCADE, related_name="audio_notes")
    audio_file = models.FileField(upload_to="audio_notes/")