import React from 'react'
import "./newsItem.css"
import Badge from '@mui/material/Badge';


export const NewsItem = ({headlines}) => {
    // console.log(props.headlines);
    // console.log(headlines);
    const badgeStyle = {
      "& .MuiBadge-badge": {
          color: 'yellow',
          backgroundColor: '#823876',
          width: 100,
          // height: 30,
          padding : 1.9
          // borderRadius: '30%'
      }
  }

  return (
    <div className='card'>
        <Badge 
          badgeContent={headlines?.source?.name} 
          color="info" 
          sx={badgeStyle}
          className='badge'
          >
        </Badge>
        <img src={headlines.urlToImage} alt="source_pic" />
        <div className="card-body">
            <span id='headlines-publication-time'>{headlines?new Date(headlines.publishedAt).toLocaleString():""}</span>
            <h5 className='card-title'>{headlines?headlines.title?.split(" ").slice(0,8).join(" "):""}</h5>
            {/* <span id='haedlines-source'>{headlines?.source?.name} </span> */}
            <p className='card-description'>{headlines?headlines.description?.split(" ").slice(0,15).join(" "):""}</p>
            <a href={headlines.url}><button id='btn'>Read More</button></a>
        </div>
    </div>
  )
}
