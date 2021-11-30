import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios' 
import {API_KEY,imageUrl} from '../../Constants/constants'
function Banner() {
   const[movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results)
            const randomMovie=Math.floor(Math.random()*response.data.results.length+1)
            setMovie(response.data.results[randomMovie])
            
        }) 
    },[])
   
    
    return (
        
        <div className="banner" style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path:""})`}}> 
      

        
            <div className="content">
              
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
            
        </div>
    )
}

export default Banner
