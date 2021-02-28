import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from './../src/pexel_2.jpg';
import img2 from './../src/slide_2.png';
import img3 from './../src/slide_3.JPG';

const Pexel = () => {
    return (
        <div className="slideshowmain blackback">
            <div className="container2 container" id="container">
            <img src={img1} alt="Avatar" className="image2" style={{width:"100%"}} />
            <div className="middle2">
            <p style={{color:"white"}}>Find photos by Swapnil Sharma on pexels</p>
            <div className="text2"><a className="text2" href="https://www.pexels.com/@eyeswithmyopia">Pexels</a></div>
            </div>
            </div>
            <div className="pexeldes">
                <p id="mainDes2" className="des">Images by <span>Swapnil Sharma</span> are available on <span>Pexels</span> for free. <span>Click on the photo</span> to open the pexels profile</p>
            </div>
        </div>
    )
}

export default Pexel;