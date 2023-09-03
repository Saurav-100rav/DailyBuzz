import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem'

const HomePage = () => {
    // const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=080a2bf499804821a1e3b8c617193d67"
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        fetchNews();
    },[]);
    const fetchNews = async()=>{
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=080a2bf499804821a1e3b8c617193d67";
        const response =  await fetch(url);
        const result = await response.json();
        console.log(result,typeof(result));
        setArticles(result.articles)
    }
  return (
    <div className='container'>
        <h2>DailyBuzz - Top Headlines</h2>
        <div className="news-section">
            {
                articles === [] ? "" 
                    : articles.map( (headline,index) => {
                            return(
                                <NewsItem headlines={headline} key={index}/>
                            )
                    })
            }
        </div>
    </div>
  )
}

export default HomePage