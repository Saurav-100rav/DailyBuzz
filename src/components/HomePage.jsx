import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsCard/NewsItem'
import Loader from './loading/Loader';

const HomePage = ({news_category}) => {
    // const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=080a2bf499804821a1e3b8c617193d67"
    const api_key = process.env.REACT_APP_API_KEY;
    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const news_items_per_page = 10;
    const [totalPages,setTotalPages] = useState(0); 
    const [prevBtnClass,setPrevBtnClass] = useState("prev-button")
    const [nextBtnClass,setNextBtnClass] = useState("next-button")
    useEffect(()=>{
        if(page===1) setPrevBtnClass("prev-button-disabled") 
            else setPrevBtnClass("prev-button");
        if(page===totalPages) setNextBtnClass("next-button-disabled")
            else setNextBtnClass("next-button");
        fetchNews();
    },[page]);
    const fetchNews = async()=>{
        console.log(loading,articles);
        try {
            setLoading(true);
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${news_category}&apiKey=${api_key}&page=${page}&pageSize=${news_items_per_page}`;
            const response =  await fetch(url);
            const result = await response.json();
            console.log(result,typeof(result));
            setArticles(result.articles);
            setTotalPages(Math.ceil(result.totalResults/news_items_per_page));
            setLoading(false);
            console.log(result.totalResults, totalPages);
            const news_type = news_category.charAt(0).toUpperCase()+news_category.slice(1);
            document.title = `DailyBuzz - ${news_type}`;
        } catch (error) {
            setLoading(false);
            console.log("Error while fetching news..",error.message);
            alert(error.message);   
        }
        
        
    }
    const nextPageHandler = async()=>{
        setLoading(true);
        console.log(page,"next clicked",totalPages);
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
        <h2>DailyBuzz - Top {news_category.charAt(0).toUpperCase()+news_category.slice(1)} News Headlines</h2>
        <div className="news-section">
            {
                loading === true ? <Loader/>
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