from rest_framework.serializers import ModelSerializer
from .models import StickyNote

class StickyNoteSerializer(ModelSerializer):
    class Meta:
        model = StickyNote
        fields = '__all__'