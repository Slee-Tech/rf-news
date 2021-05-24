type Article = {
    source: { id:string, name:string }
    author: string,
    title: string,
    description: string,
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

type AiImageResponse = {
    id: string,
    output_url: string
}

type FakeNewsArticle = {
    id: string,
    output_url: string,
    title: string
}