import React from 'react'
import { Button } from '@mui/material'
import HomeWrapper from './HomeWrapper'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import HomeProduct from './HomeProduct.js'
import Header from '../Header';
import Xit_prodaj from '../Xit_prodaj/Xit_prodaj';
import Collections from '../Collections/Collections';
import GreenRegister from '../GreenRegister/GreenRegister';
import Footer from '../Footer';
import Arrow from '../Arrow';
import Newspromotions from '../Newspromotions';
import NewProducts from '../NewProducts/NewProducts';
import UserModal from '../UserModal/UserModal';

const content = [
	{
    image:'images/slider1.png',
		title: 'Финальная распродажа',
		description:
		'Только 30 моделей можно забрать домой со скидкой до 45%',
		button: 'Подробнее',
		user: '45%',
		color: '#72BF44'
	},
	{
		title: 'Новинка!',
		description:
    'Недорогая и красивая корпусная мебель, столы и кровати !',
		button: 'Подробнее',
    image:'images/slider2.png',
		user: '50%',
		color: '#72BF44'
	},
	{
		title: 'Хиты продаж',
		description:
		'Мягкая мебель в наличии и на заказ с гарантией и на любой вкус!',
		button: 'Подробнее',
    image:'images/slider3.png',
		user: '70%',
		color: '#72BF44'
	}
];

const Home = ({handleClick, handleAllProduct, handleClickLike, size, sizelike, openModal, setOpenModal}) => {
  
  return (
    <HomeWrapper>
      <Header size={size} sizelike={sizelike} setOpenModal={setOpenModal}/>
      <div className="containers">
          <div className="caruselBlock mt-5">
            <Slider className="slider-wrapper mb-4" autoplay={3000} >
            {content.map((item, index ) => (
              
              <div
                key={index}
                className="slider-content"
                style={{width:`100%`, background: `url('${process.env.PUBLIC_URL}${item.image}') no-repeat center/contain` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button  variant="outlined">{item.button}</Button>
                </div>
                <section style={{ background: `${item.color}` }}>
                  <h2>{item.user}</h2>
                  <span>СКИДКА</span>
                </section>
              </div>
            ))}
          </Slider>
          </div>
      </div>
        <HomeProduct handleAllProduct={handleAllProduct}/>
        <Xit_prodaj handleClick={handleClick} handleClickLike={handleClickLike}/>
        <NewProducts handleClick={handleClick} handleClickLike={handleClickLike} />
        <Newspromotions />
        <Collections/>
        <GreenRegister/>
        <Footer/>
        <Arrow/>
        {openModal && <UserModal setOpenModal={setOpenModal}/>}
    </HomeWrapper>
  )
}

export default Home
