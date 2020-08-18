import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

 img: {
  float: 'right',
  width: '50vw'
 }
}));


export default function SimpleSlider() {
 const classes = useStyles();

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  autoplay: true,
  fade: true,
  variableWidth: false,
 }

 return (
  <div id='slider'>
   <Slider {...settings}>
 <div>
  <img className={classes.img} src={require("./img/Rectangle 2.png")} />
  <h4 >ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h4>
  <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
 </div>
 <div>
  <img className={classes.img} src={require("./img/face.png")} />
  <h4 > ՄԱՐՄՆԻ ԽՆԱՄՔ ԵՎ ՀԻԳԻԵՆԱ</h4>
  <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
 </div>
 <div>
  <img className={classes.img} src={require("./img/baby.jpg")} />
  <h4 >ՄՈՐ ԵՎ ՄԱՆԿԱՆ ԽՆԱՄՔ</h4>
  <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
 </div>
 <div>
  <img className={classes.img} src={require ("./img/migraine.png")} />
  <h4 >ՑԱՎ ԵՎ ՍՊԱԶՄ</h4>
  <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
 </div>
 <div>
  <img className={classes.img} src={require ("./img/doc.jpg")} />
  <h4 >ԱՌՑԱՆՑ ԲԺԻՇԿ</h4>
  <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
 </div>
</Slider>
  </div >
 );

}