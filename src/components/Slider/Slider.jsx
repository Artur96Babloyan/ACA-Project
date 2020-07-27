import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

 img: {
  float: 'right',
  width: '50%'
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
  pauseOnHover: true,
  autoplay: true,
  fade: true,
  variableWidth: false,
 }

 return (
  <div>
   <Slider {...settings}>
    <div>
     <img className={classes.img} src="https://media.mehrnews.com/d/2019/02/26/4/3058681.jpg" />
     <h3>ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h3>
     <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
    </div>
    <div>
     <img className={classes.img} src="https://slidesgo.com/storage/76015/0-hygiene-and-prevention.png" />
     <h3>ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h3>
     <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
    </div>
    <div>
     <img className={classes.img} src="https://autismtherapies.com/wp-content/uploads/2018/02/mom-and-child-playing-together-at-home.jpg" />
     <h3>ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h3>
     <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
    </div>
    <div>
     <img className={classes.img} src="https://todaymiddleware.mims.com/resource/image/74306ECD-9D62-4BA8-92D7-A74B0120E9E6/OriginalThumbnail/THUMBNAIL_Fotolia_131224316_Subscription_Monthly_M.jpg" />
     <h3>ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h3>
     <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
    </div>
    <div>
     <img className={classes.img} src="https://images.ctfassets.net/cnu0m8re1exe/4MUJ39yUKuqgEIYsGlQXRp/9a60368cc6863b65b6eea5cf51dbf91c/WhatCausesPain-1024x688.jpg?w=650&h=433&fit=fill" />
     <h3>ԴԵՂԱՏՈՒՆ ՁԵՐ ՏԱՆԸ</h3>
     <a href='/Medicines' className='slideA'>ԳՆԵԼ ՀԻՄԱ</a>
    </div>
   </Slider>
  </div >
 );

}