import React from 'react'
import Footer from '../../Footer'
import GreenRegister from '../../GreenRegister/GreenRegister'
import Header from '../../Header'
import CantactWrapper from './CantactWrapper'
import biglocation from '../../../images/biglocation.svg'
import slide1 from '../../../images/slide1.png'
import slide2 from '../../../images/image11.png'
import slide3 from '../../../images/slide3.png'
import Map from '../../map/Map'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
// import Slider from 'react-slick'
import Slider from 'react-animated-slider';

const Cantact = ({ size, sizelike }) => {
  return (
    <>
      <Header sizelike={sizelike} size={size}/>
      <CantactWrapper>
        <div className='containers'>
          <div className="cantactTitle">
            <h1>Контакты</h1>
            <p className='w-50 my-4'>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце. </p>
          </div>
          <div className="d-flex">
            <div className="cotact mt-5">
              <ul>
                <li>
                  <h2>Контакты</h2>
                  <span>+38 050-2000-573</span>
                  <span>+38 050-2000-573</span>
                  <span>+38 050-2000-573</span>
                  <span>kharkivmebelinfo@gmail.com</span>
                </li>
                <li>
                  <h2>График работы</h2>
                  <span>Понедельник-пятница:  09:00 - 18:00</span>
                  <span>Суббота:  10:00 - 16:00</span>
                  <span>Харьков, торговый центр на Гагарина 20А</span>
                </li>
                <li>
                  <h2>Соц. Сети</h2>
                  <span></span>
                  <span></span>
                </li>
              </ul>
              <img className='contactimg' src={biglocation} alt="" />
            </div>
            <div className="contactMap ms-3 mt-4 pt-3 w-50">
              <Map/>
            </div>
          </div>
          <div className="slideBlock mt-5">
            {/* <CCarousel controls transition='slide' wrap >
              <CCarouselItem>
                <CImage className='d-block w-100' src={slide1} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className='d-block w-100' src={slide2} alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className='d-block w-100' src={slide3} alt="slide 3" />
              </CCarouselItem>
            </CCarousel> */}
            <Slider className="slider-wrapper mb-4" >
              <div className="slider-content" >
                <img className='d-block w-100' style={{ height: '590px'}} src={slide1} alt="slide 1" />
              </div>
              <div className="slider-content" >
                <img className='d-block w-100' style={{ height: '590px'}} src={slide2} alt="slide 2" />
              </div>
              <div className="slider-content" >
                <img className='d-block w-100' style={{ height: '590px'}} src={slide3} alt="slide 3" />
              </div>
            </Slider>
          </div>
        </div>
      </CantactWrapper>
      <GreenRegister/>
      <Footer/>
    </>
  )
}

export default Cantact
