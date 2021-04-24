import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import "./Card.css"

function Card({ id, user, title, description, about, image, link, tag, createdAt, like}) {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
      <Link style={{textDecoration:"none", color:"#222222"}} to={`/experiences/${id}`}>  
      <div className="card">
            <div className="card__info">

            <div className="card__infoHeader">

            <div className="card__infoHeaderContainer">
            <div style={{display:"flex"}}>
            <Avatar src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`} />
            <div style={{display:"flex", flexDirection:"column", paddingLeft:"22px"}}>
            <span>{user.substring(0, 4)}</span>
            <span>Posted In</span>
            </div>
            </div>
            <div className="card__infoHeaderContainerTag">
              <span>#{tag}</span>
            </div>
            </div>

            <div className="card__infoBody">
            <Link style={{color:"inherit", textDecoration:"none"}} to={`/experiences/${id}`}><h2>{title}</h2></Link>
             {image === "Sample" &&   
             <p style={{wordWrap:"break-word"}}>{about.substring(0,300)}</p>
             }
               {image === "Sample" ? <div style={{marginTop:"30px", marginBottom:"40px"}}><a href={link}>{link}</a></div> : <img src={image} alt="card" /> }
            </div>
            <div className="card__infoBottom">
            <div>
            <AccessTimeIcon />
            <p>{createdAt.substring(0, 10)}</p>
            </div>
              <IconButton><FavoriteBorderIcon /></IconButton>
            </div>

            </div>
            </div>
        </div>
        </Link>
    )
}

export default Card
