import React from 'react';
import './App.css';
import { actions, comedy, documentry, horror, originals, romance } from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
        <NavBar url={originals,actions}/>
        <Banner/>
        <RowPost title="Netflix Originals" url={originals}/>
        <RowPost title="Actions" isSmall={true} url={actions}/> 

     <RowPost title="Comedy Movies" isSmall={true} url={comedy}/>   
     <RowPost title="Horror Movies" isSmall={true} url={horror}/>    
     <RowPost title="Romance Movies" isSmall={true} url={romance}/>     
                                                                                          
    </div>
  );
}

export default App;
