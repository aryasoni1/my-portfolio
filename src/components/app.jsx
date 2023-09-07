import React from 'react';
import Bar from "./header";
import Lower from "./footer";
import Home from './home';
function App(){
return(
    <div className='app'>
        <Bar />
        <Home />
        <Lower />
    </div>
);
}
export default App;