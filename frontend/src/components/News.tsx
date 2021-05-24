import React, { ReactElement, useState } from 'react';


interface NewsProps {
    article: Article
}

export const News: React.FC<NewsProps> = ({ article }) => {
    // const regexSplit = /'name': "|'name': '/
    // const name = article.source.split(regexSplit).pop()?.slice(0, -2);;
    // console.log(name);
    return (
        <div className="news-article col-12 mb-3" key={article.source.id}>
            <div className="row">

                <div className="col-lg-8 mb-lg-0 mb-md-3 col-md-12">
                    <img className="img-fluid w-100 article-image" src={article.urlToImage} alt="article" />
                </div>
                <div className="col-lg-4 col-md-12 d-flex flex-column">

                    <h4 className="article-title">{article.title}</h4>
                    <span className="article-subtitle">{article.author}</span>
                    <p className="article-subtitle">{article.source.name}, {article.publishedAt}</p>
                    <p className="article-description">{article.description}</p>
                    <p className="article-description">{article.content}</p>
                    <a className="mt-auto" href={article.url}><button className="btn btn-url btn-block align-bottom text-white font-weight-bold">Keep Reading</button></a>
                </div>
            </div>
        </div>
    )
}
