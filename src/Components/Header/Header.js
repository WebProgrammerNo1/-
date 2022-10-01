import React, { useState } from 'react'
import HeaderWrapper from "./HeaderWrapper"
import truck from "../../images/truck.svg"
import logo from "../../images/logo.svg"
import Vector from "../../images/Vector.svg"
import search from "../../images/search.svg"
import HeartBlack from "../../images/HeartBlack.svg"
import Heartgreen from "../../images/Heartgreen.svg"
import BuywhiteBlack from "../../images/BuywhiteBlack.svg"
import Buygreen from "../../images/Buygreen.svg"
import Profile from "../../images/Profile.svg"
import ProfileGreen from "../../images/ProfileGreen.svg"
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
// import { ShoppingCartOutlined, FavoriteBorderOutlined, AccountCircleOutlined } from '@mui/icons-material'



const Header = ({size, sizelike, setOpenModal}) => {
  
  const [image, setImage] = useState(HeartBlack)
  const [image1, setImage1] = useState(BuywhiteBlack)
  const [image2, setImage2] = useState(Profile)

  const install=()=>{
    setImage(Heartgreen)
  } 

  const uninstall=()=>{
    setImage(HeartBlack)
  }  

  const install1=()=>{
    setImage1(Buygreen)
  } 

  const uninstall1=()=>{
    setImage1(BuywhiteBlack)
  } 

  const install2=()=>{
    setImage2(ProfileGreen)
  } 

  const uninstall2=()=>{
    setImage2(Profile)
  }  
  

  
  return (
    <HeaderWrapper>
      <div className="dostavka">
        <img src={truck} alt="" />
        <p>Доставка и сборка по Харькову бесплатно! </p>
      </div>
      <div className="containers">
        <div className="headerBlock">
          <Link to="/"><img src={logo} alt="" /></Link>
          <Link to="/katalog">
            <Button className="apps">
              <img src={Vector} alt="" />
              <p>Каталог</p>
            </Button>
          </Link>
          <div className="searchbutton">
            <input type="text" name="" id="" placeholder="Искать Товар" />
            <img className="search" src={search} alt="" />
          </div>
          <Button className='phonNumber'>
            +38093-717-29-29
          </Button>
          <div className="headerIconBlock">
            <div className="buyBlock">
              <Link to="/likecart">
                <IconButton onMouseEnter={()=>install()}  onMouseLeave={()=>uninstall() }>
                  {/* <FavoriteBorderOutlined className='buy'/> */}
                  <img src={`${image }`} alt="" />
                </IconButton>
                <div className="buynumber">
                  <span>{sizelike}</span>
                </div>
              </Link>
            </div>
            <div className="cartblock">
              <Link to="/cart">
                <IconButton onMouseEnter={()=>install1()}  onMouseLeave={()=>uninstall1() }>
                  {/* <ShoppingCartOutlined className='cart'/> */}
                  <img className='w-100' src={`${image1 }`} alt="" />
                </IconButton>
                <div className="cartnumber">
                  <span>{size}</span>
                </div>
              </Link>
            </div>
            <div onClick={()=> { setOpenModal(true) } } className="myuser">
                <IconButton onClick={()=> { setOpenModal(true) } } onMouseEnter={()=>install2()}  onMouseLeave={()=>uninstall2() }>
                  {/* <AccountCircleOutlined className='user'/> */}
              <Link onClick={()=> { setOpenModal(true) } } to="/myuser">
                  <img className='w-100' src={`${image2 }`} alt="" />
              </Link>
                </IconButton>
            </div>
          </div>
        </div>
        <div className="headerMenu">
          <ul>
            <li><Button>Харьков мебель</Button></li>
            <li><Link to="/about"><Button>Про нас</Button></Link></li>
            <li><Link to=""><Button>Мебель под заказ</Button> </Link> </li>
            <li><Button>Шкафы купе</Button></li>
            <li><Link to="/paymentAndDelivery"><Button>Доставка и оплатa</Button></Link></li>
            <li><Link to="/cantact"><Button>Контакты</Button></Link> </li>
            <li><Button>Письмо директору</Button></li>
            <li><Button>Бренды</Button></li>
            <li><Button>Дизайн интерьера</Button></li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  )
}
export default Header

