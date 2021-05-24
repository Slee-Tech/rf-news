from django.shortcuts import render
from django.core.cache import cache
from django.http import JsonResponse # can use drf Response directly for python dicts

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from news.serializers import NewsSerializer, FakeNewsSerializer


@api_view(['GET'])
def news_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        articles = [cache.get(key) for key in cache.keys('article*')]
        # serializer = NewsSerializer(articles, many=True)
        # return Response(serializer.data)
        
        images = [cache.get(key) for key in cache.keys('fake_image*')]
        print(images)
        titles = [cache.get(key) for key in cache.keys('fake_title*')]
        print(titles)
        json_response = {
            "articles": articles,
            "images": images,
            "titles": titles,
        }

        return Response(json_response)
