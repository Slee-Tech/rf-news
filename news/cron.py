from django.core.cache import cache
import os, requests, json



def my_scheduled_job():
    pass

def get_real_news_articles():
    news_articles_response = requests.get(f'https://newsapi.org/v2/top-headlines?country=us&apiKey={os.getenv("NEWS_API_KEY")}')
    # check if request failed
    if news_articles_response.status_code != 200:
        raise Exception("Failed making API request.")
    news_articles = news_articles_response.json()
    articles = news_articles["articles"]
    for article in articles:
        cache.set(f'article:{article["title"]}', article, timeout=3600)
        print(article)

def get_fake_news_data():
    test_queries = ['bacon', 'snake', 'slug', 'pizza', 'candy']
    request_key =  {'Api-Key': os.getenv("IMAGE_API_KEY")}

    for query in test_queries:

        request_url = f'https://api.deepai.org/api/text2img?text={query}'
        fake_images_response = requests.post(request_url, headers=request_key)
        # check if request failed
        if fake_images_response.status_code != 200:
            raise Exception("Failed making API request for image.")
        fake_image = fake_images_response.json()
        # articles = news_articles["articles"]
        # for article in articles:
        cache.set(f'fake_image:{fake_image["id"]}', fake_image, timeout=3600)
        print(fake_image)

        # get a fake title
        fake_title_response = requests.get("https://clickbait-generator.herokuapp.com/api")
         # check if request failed
        if fake_title_response.status_code != 200:
            raise Exception("Failed making API request for title.")
        fake_title = fake_title_response.json()
        cache.set(f'fake_title:{fake_title["title"]}', fake_title, timeout=3600)
        print(fake_title)


    