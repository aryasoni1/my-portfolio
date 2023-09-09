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
                        <img src="images/github.svg"></img>
                    </a>
                    <a href="">
                        <img src="images/linkedin.svg"></img>
                    </a>
                </div>
            </div>
            <div className="copyright">
             <p>Copyright</p>
            </div>
        </div>
    </footer>
    );
}

export default Lower;