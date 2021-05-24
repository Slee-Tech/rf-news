from rest_framework import serializers

class NewsSerializer(serializers.Serializer):
    source = serializers.CharField(max_length=255) 
    author = serializers.CharField(max_length=255) 
    title = serializers.CharField(max_length=255) 
    description = serializers.CharField(max_length=511) 
    url = serializers.CharField(max_length=255, ) 
    urlToImage = serializers.CharField(max_length=255) 
    publishedAt = serializers.CharField(max_length=255) 
    content = serializers.CharField(max_length=511) 

class FakeNewsSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    id = serializers.CharField(max_length=255)
    output_url = serializers.CharField(max_length=255)
    