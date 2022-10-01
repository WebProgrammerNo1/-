import React, { useState } from 'react'
import logo from "../../images/logo.svg"
import call from "../../images/call.svg"
import gmail from "../../images/gmail.svg"
import Location from "../../images/LocationGreen.svg"
import facebook from "../../images/facebook.svg"
import facebookGreen from "../../images/facebookGreen.svg"
import insta from "../../images/insta.svg"
import instaGreen from "../../images/instaGreen.svg"
import youTobe from "../../images/youTobe.svg"
import youTobeGreen from "../../images/youTobeGreen.svg"
import telegram from "../../images/telegram.svg"
import telegramGreen from "../../images/telegramGreen.svg"
import Wk from "../../images/Wkantakt.svg"
import WkGreen from "../../images/WkantaktGreen.svg"
import Footerwrapper from './FooterWrapper'
import Map from '../map/Map'
import { Link } from 'react-router-dom'




const props = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}

const Footer = (props) => {
  
    const [image, setImage] = useState(facebook)
    const [image1, setImage1] = useState(insta)
    const [image2, setImage2] = useState(youTobe)
    const [image3, setImage3] = useState(telegram)
    const [image4, setImage4] = useState(Wk)

    const install=(itemID)=>{
      setImage(facebookGreen)
      console.log(itemID)
    } 

    const uninstall=()=>{
      setImage(facebook)
    } 

    const install1=()=>{
      setImage1(instaGreen)
    } 

    const uninstall1=()=>{
      setImage1(insta)
    } 

    const install2=()=>{
      setImage2(youTobeGreen)
    } 

    const uninstall2=()=>{
      setImage2(youTobe)
    } 

    const install3=()=>{
      setImage3(telegramGreen)
    } 

    const uninstall3=()=>{
      setImage3(telegram)
    } 

    const install4=()=>{
      setImage4(WkGreen)
    } 

    const uninstall4=()=>{
      setImage4(Wk)
    } 
  
     

  return (
    <Footerwrapper>
      <div className="footer">
        <div className="container">
            <div className="footerBlock mb-5">
                <div className="contact">
                    <div className="footerLogo">
                       <a href="#"><img  src={logo} alt=""/></a> 
                    </div>
                    <ul className='footercantact'>
                        <li> <a href="#"><img className='me-2' src={call} alt="" />+38093-717-29-29</a></li>
                        <li> <a href="#"><img className='me-2' src={gmail} alt="" /> kharkivmebelinfo@gmail.com</a></li>
                        <li> <a href="#"><img className='me-2' src={Location} alt="" /> Харьков</a></li>
                    </ul>
                    <ul className='socialMedia'>
                        <li itemID='1' onMouseEnter={()=>install()}  onMouseLeave={()=>uninstall() }><img src={`${image }`} alt="" /></li>
                        <li itemID='2' onMouseEnter={()=>install1()} onMouseLeave={()=>uninstall1()}><img src={`${image1}`} alt="" /></li>
                        <li itemID='3' onMouseEnter={()=>install2()} onMouseLeave={()=>uninstall2()}><img src={`${image2}`} alt="" /></li>
                        <li itemID='4' onMouseEnter={()=>install3()} onMouseLeave={()=>uninstall3()}><img src={`${image3}`} alt="" /></li>
                        <li itemID='5' onMouseEnter={()=>install4()} onMouseLeave={()=>uninstall4()}><img src={`${image4}`} alt="" /></li>
                    </ul>
                </div>
                <div className="shop ms-5 ps-5">
                  <div className="shopTitle">
                    <h2>Наш магазин</h2>
                  </div>
                  <ul className="shopMenu">
                    <li><Link to="">О магазине</Link></li>
                    <li><Link to="">Наши вакансии</Link></li>
                    <li><Link to="/cantact">Контакты</Link></li>
                    <li><Link to="">Мебель в рассрочку</Link></li>
                    <li><Link to="">Бренды</Link></li>
                    <li><Link to="">Возврат товара</Link></li>
                    <li><Link to="">Сертификаты</Link></li>
                    <li><Link to="">Обзоры</Link></li>
                  </ul>
                </div>
                <div className="service ms-4 ps-4">
                  <div className="serviceTitle">
                    <h2>Сервис</h2>
                  </div>
                  <ul>
                    <li><Link to="">Ваши заказы</Link></li>
                    <li><Link to="">Доставка и оплата</Link></li>
                    <li><Link to="">Сборка мебели</Link></li>
                    <li><Link to="">Хочу в подарок</Link></li>
                    <li><Link to="">Список сравнения</Link></li>
                    <li><Link to="">Карта сайта</Link></li>
                  </ul>
                </div>
                <div className="support ms-4 ps-4">
                  <div className="supportTitle">
                    <h2>Помощь</h2>
                  </div>
                  <ul className='supportMenu'>
                      <li><Link to="">Статьи</Link></li>
                      <li><Link to="">Вопрос ответ</Link></li>
                      <li><Link to="">Производители</Link></li>
                  </ul>
                </div>
                <div className="LocationFooter ms-4">
                  <div className="LocationFooterTitle">
                    <h2>Как найти нас ?</h2>
                  </div>
                  <div className="mapFooterBlock">
                    <Map/>
                  </div>
                </div>
            </div>
            
        </div>
      </div>
    </Footerwrapper>
  )
}

export default Footer
