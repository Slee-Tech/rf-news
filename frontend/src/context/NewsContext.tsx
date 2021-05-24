import React, { ReactElement, useState, useEffect } from 'react'

export const NewsContext: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getArticles();
    }, [])

    const apiKey: string = '976f344355f84487b447bf0924e26ae3';

    const getArticles = () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setArticles(data.articles)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="row news-list pr-4">
            <div className="col-12 mt-2 d-flex align-items-center">
                <h5 className="">Latest News</h5>
            </div>
            {articles.map((article) => {
            })}
        </div>
    )
}
