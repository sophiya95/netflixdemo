import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId] = useState("")
    useEffect(() => {
       axios.get(props.url).then(response =>{
           console.log(response.data)
           setMovies(response.data.results)

       }).catch(err=>{
        //    alert("network error")
       })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };   

      const handleMovie =(id)=>{
            console.log(id)
            axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                console.log(response.data)
                if(response.data.results.length!=0){
                    setUrlId(response.data.results[0])
                } 
            })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2> 
            <div className="posters">
                {
                    movies.map((obj)=>{
                        return(
                            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallposter" :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                           
                        )
                        
                    })
                }
               
               

            </div>
            {urlid &&<YouTube videoId={urlid.key} opts={opts}/> } 
            
          

            
        </div>
    )
}

export default RowPost
