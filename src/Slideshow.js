import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import img1 from './../src/slide_1.jpg';

const slideImages = [
  'slide_2.jpg',
  'slide_3.jpg',
  'images/slide_4.jpg'
];

function open() {
  window.open('https://google.com', '_blank');
}

const Slideshow = () => {
    return (
      <div className="slideshowmain blackback">
            <div className="pexeldes toleft">
                <p id="mainDes2" className="des">Projects by <span>Swapnil Sharma</span> are available on <span>Codepen and Github</span></p>
            </div>
            <div className="container2 container" id="container">
            <img src={img1} alt="Avatar" className="image2" style={{width:"100%"}} />
            <div className="middle2">
            <p style={{color:"white"}}>Find Projects by Swapnil Sharma on Github</p>
            <div className="text2"><a className="text2" href="https://github.com/explore">Github</a></div>
            </div>
            </div>
        </div>      
    )
}

export default Slideshow;