import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import NewProductsWrapper from './NewProductsWrapper'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './NewProducts.css';
import { IconButton } from '@mui/material';


const data = [
    {
      id: 1,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image: require('../../images/stul1.png'),
      amount: 1
    },
    {
      id: 2,
      name:'Кровати"Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image: require('../../images/stul2.png'),
      amount: 1
    },
    {
      id: 3,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image:require('../../images/stul3.png'),
      amount: 1
    },
    {
      id: 4,
      name:'Диван "Ergonomic Rubber Shoes”',
      price: 35990,
      oldprice: 75430,
      image:require('../../images/stul4.png'),
      amount: 1
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
 
const NewProducts = ({handleClick, handleClickLike}) => {

  return (
    <NewProductsWrapper>
      <h2 className='xitTitle'>Наши Новинки</h2>
    <Slider {...settings} >     
        {data?.map((item)=>(
          <div>
                <div key={item.id} className="productBlock">
                    <div className="productImg">
                        <img src={item.image} alt="img_bor" />
                    </div>
                    <IconButton onClick={() => handleClickLike( item )} className='IconButtonlike'>qwi</IconButton>
                    <IconButton onClick={() => handleClick( item )} className='IconButtonbuy'>qwi</IconButton>
                </div>
                <div className="productTitle">
                    <h2>{item.name }</h2>
                    <span>{item.price}</span>
                    <span>{item.oldprice}</span>
                </div>
          </div>
          ))}
    </Slider>
</NewProductsWrapper>
  )
}

export default NewProducts
