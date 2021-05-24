import React, { ReactElement, useState, useEffect } from 'react'
import { FakeNews } from './FakeNews';
import { News } from './News';
import { Titles } from './Titles';

export const NewsList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [aiImages, setAiImages] = useState<AiImageResponse[]>([]);
    const [fakeTitles, setFakeTitles] = useState<string[]>([]);
    const [testImage, setTestImage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fakeNews, setFakeNews] = useState<FakeNewsArticle[]>([]);
    const savedTestURLs = [{
        id: "4b1ba0b4-ad17-43b9-9dac-b55304865261",
        output_url: "https://api.deepai.org/job-view-file/c593768a-7523-4f3f-bcd0-b950cd23d9f7/outputs/output.jpg"
    },
    {
        id: "b48cc645-eb9a-48f5-933c-b7d912e4b498",
        output_url: "https://api.deepai.org/job-view-file/dff1c32c-9011-4910-bec7-09bead946d5e/outputs/output.jpg"
    },
    {
        id: "208bb0a1-90b2-4970-afae-d252a4732480",
        output_url: "https://api.deepai.org/job-view-file/8fc3bf93-2446-4c3b-a2fb-9518594f244f/outputs/output.jpg"
    },
    {
        id: "fb540bb3-1ad7-4e81-9947-128226ff3a04",
        output_url: "https://api.deepai.org/job-view-file/22ad5073-8325-4901-a50e-449c62fbf887/outputs/output.jpg"
    }
    ]

    const exampleQueries = ["scum", "garbage", "crocodile", "politics"];

    useEffect(() => {
        // fetchFromAPIs();
        // // Promise.all([
        //getAiImages();
        //getFakeTitles();
        getArticles();
        // ]);


    }, [])

    const randomHeadlineURL = "https://clickbait-generator.herokuapp.com/api";

    // const fetchFromAPIs = async () => {
    //     const titles = await getFakeTitles();
    //     const articlesTest = await getArticles();
    // }

    const getFakeTitles = async () => {
        setIsLoading(true);
        let titles: string[] = [];

        for (let i = 0; i < 4; i++) {
            const response = await fetch(randomHeadlineURL);
            const data = await response.json();
            titles.push(data.title);
        }
        setFakeTitles(titles);
        setIsLoading(false);

        // setIsLoading(true);
        // let titles: string[] = []
        // exampleQueries.forEach((query) => {
        //     fetch(randomHeadlineURL)
        //         .then((res) => {


        //             return res.json();
        //         }).then((data) => {

        //             console.log(data);
        //             titles.push(data.title);
        //             //setFakeTitles([...fakeTitles, await data.title])
        //             //setTestImage(data.output_url);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // });
        // console.log(titles);
        // setFakeTitles(titles);
        // setIsLoading(false);
        //return titles;
    }

    // returns {
    // "title": "Here's 45 tips to awaken the Elder Gods."
    // }

    const apiKey: string = '976f344355f84487b447bf0924e26ae3';

    const getAiImages = async () => {
        // will want to use this for creating the fake articles?
        setIsLoading(true);
        let fetchedImages: AiImageResponse[] = [];
        for (let i = 0; i < exampleQueries.length; i++) {
            const response = await fetch(`https://api.deepai.org/api/text2img?text=${exampleQueries[i]}`);
            const data = await response.json();
            fetchedImages.push(data);
            // fetch(`https://api.deepai.org/api/text2img?text=${exampleQueries[i]}`, {
            //     method: "POST",
            //     headers: {
            //         'Api-Key': "698866de-36ad-40ce-b0a7-fdd6de4e5625"
            //     }
            // }).then((res) => {
            //     return res.json();
            // }).then((data) => {
            //     console.log(data);
            //     fetchedImages.push(data);
            //     //setTestImage(data.output_url);
            // })
            //     .catch((err) => {
            //         console.log(err);
            //     })
        };

        setAiImages(fetchedImages);
        setIsLoading(false);
        // fetch("https://api.deepai.org/api/text2img?text=scum", {
        //     method: "POST",
        //     headers: {
        //         'Api-Key': "698866de-36ad-40ce-b0a7-fdd6de4e5625"
        //     }
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log(data);
        //     setTestImage(data.output_url);
        // })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    const getArticles = async () => {
        console.log("hello from getarticles");
        setIsLoading(true);
        // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const testURL = "http://127.0.0.1:8000/api/articles/"
        try {
            const response = await fetch(`${testURL}`);
            const data = await response.json();
            console.log(data);
            setArticles(data.articles);
            const fakeArticles = data.images.map((image: AiImageResponse, i: number) => {
                const newFakeArticle = {
                    id: image.id,
                    output_url: image.output_url,
                    title: data.titles[i].title
                }
                console.log(newFakeArticle);
                return newFakeArticle;
            })

            console.log(`Fake articles is: ${fakeArticles}`);
            setFakeNews(fakeArticles);
        } catch (err) {
            console.log(err);

        }
        // fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setArticles(data.articles)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        setIsLoading(false);
    }

    if (isLoading) {
        return <h1>Loading</h1>
    } else {
        // slice real to shuffle real/fake 
        const realArticleSlice = Math.floor(Math.random() * Math.floor(articles.length));
        const fakeArticleSlice = Math.floor(Math.random() * Math.floor(fakeNews.length));
        // const fakeNews: FakeNews[] = [];
        // savedTestURLs.map((image, i) => {
        //     const fakeNewsArticle = {
        //         id: image.id,
        //         output_url: image.output_url,
        //         title: fakeTitles[i]
        //     }
        //     fakeNews.push(fakeNewsArticle);
        // })
        // for (let i = 0; i < savedTestURLs.length; i++) {
        //     const fakeNewsArticle = {
        //         id: savedTestURLs[i].id,
        //         output_url: savedTestURLs[i].output_url,
        //         title: fakeTitles[i]
        //     }
        //     fakeNews.push(fakeNewsArticle);
        // }

        //console.log(`Fake news: ${fakeNews}`);
        return (

            <div className="row news-list pr-4">
                <div className="col-12 mt-2 d-flex align-items-center">
                    <h5 className="">Latest News</h5>
                </div>
                {/* begin the shuffle  */}
                {articles.map((article, i) => {
                    if (i <= realArticleSlice) {
                        return <News article={article} />
                    } else {
                        return
                    }
                })}

                {fakeNews.map((news, i) => {
                    if (i <= fakeArticleSlice) {
                        return <FakeNews fakeNews={news} />
                    } else {
                        return
                    }
                })}

                {articles.map((article, i) => {
                    if (i > realArticleSlice) {
                        return <News article={article} />

                    } else {
                        return
                    }
                })}

                {fakeNews.map((news, i) => {
                    if (i > fakeArticleSlice) {
                        return <FakeNews fakeNews={news} />
                    } else {
                        return
                    }
                })}
            </div>
        )
    }
}
