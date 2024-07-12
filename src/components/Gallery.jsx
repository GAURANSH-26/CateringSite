import React from 'react'
import "../style/gallery.css"
import P1 from "../assets/photo1.jpg"
import P2 from "../assets/photo15.jpeg"
import P3 from "../assets/photo3.jpg"
import P4 from "../assets/photo4.jpg"
import P5 from "../assets/photo5.jpg"
import P6 from "../assets/photo6.jpg"
import P7 from "../assets/photo7.jpg"
import P8 from "../assets/photo2.jpg"
import P9 from "../assets/photo9.jpg"
import P10 from "../assets/photo10.jpg"
import P11 from "../assets/photo11.jpg"
import P12 from "../assets/photo12.jpg"
import P13 from "../assets/photo13.jpeg"
import P14 from "../assets/photo14.jpeg"
import Video from "../assets/video.mp4"


export const Gallery = () => {

  return (
    <div id='gallery' className="main-container">
      <div className="grid-container" data-aos="zoom-in">
        <div className="card card--2x" >
          <div className="card__content big-script padding-large">
            <p>Serving Happiness on Plates</p>
          </div>
        </div>
        <div className="card" >
          <div className="card__image">
            <img src={P6} />
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P2} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__content  padding-large">
            <h1>Wedding Catering</h1>
          </div>
        </div>
        <div className="card card--horizontal">
          <div className="card__image">
            <img src={P4} alt="Card Image" />
          </div>
        </div>
        <div className="card card--featured">
          <div className="card__side-by-side--m">
            <div className="card__image">
              <img src={P1} alt="Card Image" />
            </div>
            <div className="card__content padding-large--l">
              <p>
                Anil Caterers: Culinary excellence for all events.
                Passionate about food, committed to exceptional service—your
                perfect choice for memorable gatherings!</p><br />
              <p>Exceptional Quality</p>
              <p>Professional Service</p>
              <p>Customization</p>
            </div>
          </div>
        </div>
        <div className="card card--vertical">
          <div className="card__image">
            <img src={P5} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P3} alt="Card Image" />
          </div>
        </div>
        <div className="card card--horizontal">
          <div className="card__side-by-side">
            <div className="card__image">
              <img src={P11} alt="Card Image" />
            </div>

          </div>
        </div>
        <div className="card card--vertical">
          <div className="card__image">
            <img src={P7} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P12} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__content padding-large">

            <h1>Corporate Catering</h1>
          </div>
        </div>
        <div className="card card--2x">
          <div className="card__image">
            <img src={P9} alt="Card Image" />
          </div>
        </div>
        <div className=" card--horizontal card--frameless z-20">

          <video controls width="400" poster="thumbnail.jpg">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P10} alt="Card Image" />
          </div>
        </div>
        <div className="card card--horizontal">
          <div className="card__image">
            <img src={P8} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P14} alt="Card Image" />
          </div>
        </div>
        <div className="card">
          <div className="card__content padding-large">
            <h1>
              Social Events and Holiday Catering
            </h1>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={P13} alt="Card Image" />
          </div>
        </div>
      </div>
    </div>

  )
}
