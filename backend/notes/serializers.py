from rest_framework import serializers
from .models import Note, AudioNote
    
class AudioNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioNote
        fields = ['id', 'note', 'audio_file']

class NoteSerializer(serializers.ModelSerializer):
    audio_notes = AudioNoteSerializer(many=True, read_only=True)
    class Meta:
        model = Note
        fields = ['id', 'title', 'description', 'user', 'audio_notes']
        read_only_fields = ['user']