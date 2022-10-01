import React from 'react'
import Xit_prodajWrapper from './Xit_prodajWrapper'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Xit_prodaj.css';
import { IconButton } from '@mui/material';
import { useState } from 'react';


const data = [
    {
      id: 5,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image: require('../../images/Rectangle 19.png'),
      amount: 1,
      number: '80шт'
    },
    {
      id: 6,
      name:'Кровати"Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image: require('../../images/Rectangle 20.png'),
      amount: 1,
      number: '80шт'
    },
    { 
      id: 7,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image:require('../../images/Rectangle 21.png'),
      amount: 1,
      number: '80шт'
    },
    {
      id: 8,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image:require('../../images/Rectangle 22.png'),
      amount: 1,
      number: '80шт'
    },

]


const settings = {
  initialSlide: 0,
  className: "center",
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
};

const Xit_prodaj = ({handleClick, handleClickLike}) => {
 
  return (
    <Xit_prodajWrapper>
     
      
      <h2 className='xitTitle'>Хиты продаж</h2>
    <Slider {...settings} >
        {data?.map((item)=>(
           <div>
                <div key={item.id} className="productBlock">
                    <div className="productImg">
                        <img src={item.image} alt="img_bor" />
                    </div>
                    <IconButton onClick={() => handleClickLike( item )} className='IconButtonlike'>qwi</IconButton>
                    <IconButton onClick={() => handleClick(item)} className='IconButtonbuy'>qwi</IconButton>
                </div>
                <div className="productTitle">
                    <h2>{item.name}</h2>
                    <span>{item.price}</span>
                    <span>{item.oldprice}</span>
                </div>
          </div>
            ))}
    </Slider>
</Xit_prodajWrapper>
  )
}

export default Xit_prodaj


