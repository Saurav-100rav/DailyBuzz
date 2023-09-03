import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem'
import Spinner from './Spinner';

const HomePage = () => {
    // const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=080a2bf499804821a1e3b8c617193d67"
    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const news_items_per_page = 10;
    const [totalPages,setTotalPages] = useState(0); 
    const [prevBtnClass,setPrevBtnClass] = useState("prev-button")
    const [nextBtnClass,setNextBtnClass] = useState("next-button")
    useEffect(()=>{
        if(page===1) setPrevBtnClass("prev-button-disabled") 
            else setPrevBtnClass("prev-button");
        if(page===4) setNextBtnClass("next-button-disabled")
            else setNextBtnClass("next-button");
        fetchNews();
    },[page]);
    const fetchNews = async()=>{
        console.log(loading,articles)
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=080a2bf499804821a1e3b8c617193d67&page=${page}&pageSize=${news_items_per_page}`;
        const response =  await fetch(url);
        const result = await response.json();
        console.log(result,typeof(result));
        setArticles(result.articles);
        setTotalPages(Math.ceil(result.totalResults/news_items_per_page));
        setLoading(false)
        console.log(result.totalResults, totalPages);
    }
    const nextPageHandler = async()=>{
        setLoading(true);
        console.log(page,"next clicked");
        if(page<totalPages)
            setPage(page+1);
        if(page===totalPages) 
        alert("News Item finished....");
    }
    const prevPageHandler = async()=>{
        setLoading(true)
        console.log(page,"prev clicked");
        if(page===1){
            alert("can't go back");
        }
        else
        setPage(page-1);
    }
  return (
    <div className='container'>
        <h2>DailyBuzz - Top Headlines</h2>
        <div className="news-section">
            {
                loading === true ? <Spinner/>
                    : articles.map( (headline,index) => {
                            return(
                                <NewsItem headlines={headline} key={index}/>
                            )
                    })
            }
        </div>
        <div class="button-container">
            <button class={prevBtnClass} onClick={prevPageHandler}><i className="fas fa-arrow-left"></i> Previous</button>
            <button class={nextBtnClass} onClick={nextPageHandler}>Next <i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default HomePage