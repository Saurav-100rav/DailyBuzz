import React from 'react'

export const NewsItem = ({headlines}) => {
    // console.log(props.headlines);
    // console.log(headlines);
  return (
    <div className='card'>
        <img src={headlines.urlToImage} alt="source_pic" />
        <div className="card-body">
            <h5 className='card-title'>{headlines?headlines.title?.split(" ").slice(0,13).join(" "):""}</h5>
            <span>{headlines?.source?.name} {headlines?new Date(headlines.publishedAt).toLocaleString():""}</span>
            <p className='card-description'>{headlines?headlines.description?.split(" ").slice(0,24).join(" "):""}</p>
            <a href={headlines.url}><button>Read More</button></a>
        </div>
    </div>
  )
}
