import React, { Component } from "react";
import Slider from "react-slick";
import "../HorizontalSlider/Slider.css"
import zoho from "../images/zoho.png"
import infosys from "../images/infosys.jpg"
import netsuite from "../images/netsuite.png"
import oracle from "../images/oracle.png"
import quick from "../images/quick.png"
import sap from "../images/sap.jpg"
import wave from "../images/wave.png"
import tally from "../images/tally.png"
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="sliderh ">
      <h1 data-aos="fade-up-right">We work with all the top accounting technologies</h1>
        <Slider className="slider" {...settings}>
          <div >
          <img  className="sliderimg"  data-aos="flip-left"  sm={12}  src={zoho}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={netsuite}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={oracle}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={quick}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={sap}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={tally}></img>
          </div>
          <div>
          <img className="sliderimg"  data-aos="flip-left"  sm={12}  src={wave}></img>
          </div>
        </Slider>
      </div>
    );
  }
}