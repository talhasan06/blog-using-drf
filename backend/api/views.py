from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import StickyNote
from .serializers import StickyNoteSerializer

# Create your views here.
@api_view(['GET'])
def get_notes(request):
    notes = StickyNote.objects.all()
    serializer = StickyNoteSerializer(notes,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_note(request,pk):
    note = StickyNote.objects.get(id=pk)
    serializer = StickyNoteSerializer(note,many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_note(request,pk):
    note = StickyNote.objects.get(id=pk)
    note.delete()
    return Response('The note got deleted')

@api_view(['PUT'])
def update_note(request,pk):
    note = StickyNote.objects.get(id=pk)
    serializer = StickyNoteSerializer(instance=note,data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def create_note(request):

    note = StickyNote.objects.create(
        title = request.data['title'],
        body = request.data['body']
    )

    serializer = StickyNoteSerializer(note,many = False)
    return Response(serializer.data)
     