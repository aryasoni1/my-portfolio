import React,{useState} from 'react';
import Bar from "./header";
import Lower from "./footer";
import Home from './home';
import About from './about';
import Project from './projects';

function App(){
   
return(

    <div className='app'>
        <Bar />
        <Home />
        <About />
        <Project />
        <Lower />
    </div>
);
}
export default App;