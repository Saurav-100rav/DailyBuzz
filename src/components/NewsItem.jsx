import React from 'react'

export const NewsItem = ({headlines}) => {
    // console.log(props.headlines);
    // console.log(headlines);
  return (
    <div className='card'>
        {/* <img src={headlines.urlToImage} alt="source_pic" /> */}
        <div className="card-body">
            <h5 className='card-title'>{headlines.title}</h5>
            <p className='card-description'>{headlines.description}</p>
            <a href={headlines.url}><button>get details</button></a>
        </div>
    </div>
  )
}
