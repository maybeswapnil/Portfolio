import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from './../src/slide_1.jpg';
import img2 from './../src/slide_2.png';
import img3 from './../src/slide_3.JPG';


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
      <div className="slideshowmain">
          <div className="container">
              <img src={img1} alt="Avatar" class="image" />
              <div className="overlay">
              <div className="text"><a href="http://www.c-row.tech"><button class="open">c-row</button></a></div>
              </div>
          </div>
  
          <div className="container">
              <img src={img2} alt="Avatar" class="image" />
              <div className="overlay">
              <div className="text"><a href="http://www.c-row.tech"><button class="open">Snake Game</button></a></div>
          </div>
          </div>
          <div className="container">
              <img src={img3} alt="Avatar" class="image" />
              <div className="overlay">
              <div className="text"><a href="http://www.c-row.tech"><button class="open">CAD</button></a></div>
              </div>
          </div>
      </div>
      
    )
}

export default Slideshow;