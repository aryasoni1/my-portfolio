import React from 'react';
function Lower(){
    return(
    <footer id="footer">
        <div className="footer">
            <div className='contact'>
                <div className='contactdetail'>
                    <h1>Arya Soni</h1>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className='contactlink'>
                    <h1>Social</h1>
                    <a href="">
                        <img src="images/github-ico.png"></img>
                    </a>
                    <a href="">
                        <img src="images/linkedin-ico.png"></img>
                    </a>
                </div>
            </div>
            <div className="copyright">
             <p>Copyright 2023.Made by Arya Soni.</p>
            </div>
        </div>
    </footer>
    );
}

export default Lower;