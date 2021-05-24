import React, { ReactElement, useState } from 'react';


interface FakeNewsProps {
    fakeNews: FakeNewsArticle
}

export const FakeNews: React.FC<FakeNewsProps> = ({ fakeNews }) => {

    return (
        <div className="news-article col-12 mb-3">
            <div className="row">

                <div className="col-lg-8 mb-lg-0 mb-md-3 col-md-12">
                    <img className=" fake-image w-75 article-image" src={fakeNews.output_url} alt="article" />
                </div>
                <div className="col-lg-4 col-md-12 d-flex flex-column">

                    <h4 className="article-title">{fakeNews.title}</h4>
                    <a className="mt-auto" href="https://en.wikipedia.org/wiki/Troll"><button className="btn btn-url btn-block align-bottom text-white font-weight-bold">Keep Reading</button></a>
                </div>
            </div>
        </div>
    )
}
