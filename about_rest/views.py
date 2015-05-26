from rest_framework import status, generics

from .models import News, Notice
from .serializers import NoticeSerializer, NewsSerializer


class NewsList(generics.ListCreateAPIView):
    serializer_class = NewsSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return News.objects.filter(**eval(self.request.GET['filter']))
        else:
            return News.objects.all()

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NoticeList(generics.ListCreateAPIView):
    serializer_class = NoticeSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Notice.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Notice.objects.all()

class NoticeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
