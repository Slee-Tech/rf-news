from django.db import models

# Create your models here.
class NewsArticle(models.Model):
    source_id = models.CharField(max_length=255, null=True) 
    source_name = models.CharField(max_length=255, null=True) 
    author = models.CharField(max_length=255, null=True) 
    title = models.CharField(max_length=255, null=True) 
    description = models.CharField(max_length=511, null=True) 
    url = models.CharField(max_length=255, null=True) 
    urlToImage = models.CharField(max_length=255, null=True) 
    publishedAt = models.CharField(max_length=255, null=True) 
    content = models.CharField(max_length=511, null=True) 
    is_fake = models.BooleanField(default=False)