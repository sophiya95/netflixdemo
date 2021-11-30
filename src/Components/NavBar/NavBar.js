import React, { useState,useEffect } from 'react'
import "./NavBar.css"
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'
function NavBar(props) {
    const [searchMovie, setSearchMovie] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const handleChange = (e) =>{
            setSearchMovie(e.target.value)
    }
  
  
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" /> 
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"alt="avatar" />

            
        </div>
    )
}

export default NavBar
