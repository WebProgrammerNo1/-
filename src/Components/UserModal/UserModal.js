import { Button } from '@mui/material'
import React, { useState } from 'react'
import UserModalWrapper from './UserModalWrapper'
import { CloseRounded } from '@material-ui/icons'
import Google  from "../../images/google.svg";
import facebookbtn  from "../../images/facebookbtn.svg";

const UserModal = ({setOpenModal}) => {
 
const[active, setActive] = useState('active')

const activate = ()=>{
    setActive('')
}
const activate1 = ()=>{
    setActive('active')
}

  return (
    <UserModalWrapper>
        {/* <div className="Modal">
            <div className="ModalContainer">
                <Button className='closeBtn' onClick={() => {setOpenModal(false)}}><CloseRounded /> </Button>
                <div className="title">
                    <span>Вход </span>
                    <span className='mx-3'>|</span>
                    <span>Регистрация</span>
                </div>
                <div className="UserinputBlock d-flex flex-column ">
                    <input type="text" placeholder='Введите имя'fullwidth />
                    <input type="email" placeholder='Введите e-mail' name="" id="" />
                    <Button style={{color:'#fff', backgroundColor:' #72BF44', textTransform: 'capitalize', borderRadius:'6px',padding:'10px'}}  className='mt-4'>Войти</Button>
                </div>
                <div className="foooter d-flex flex-column mt-2 ">
                    <span className='my-2'>Забыли пароль?</span>
                    <span className='my-2'>Войти как пользователь</span>
                </div>
                <div className="footerbtn d-flex ">
                    <Button className='me-4'>
                        <img className='me-2' src={Google} alt="" />
                        Google
                    </Button>
                    <Button>
                        <img className='me-2' src={facebookbtn} alt="" />
                        Facebook
                    </Button>
                </div>
            </div>

        </div> */}
        <div className="section">
            <div className="row full-height justify-content-center">
                <div className="col-12 align-self-center">
                    <div className="card-3d-wrap mx-auto">
                        <div className={'card-3d-wrapper '+ (active)}>
                            <div className="card-front">
                                <div className="center-wrap">
                                    <div className="section">
                                        <div className="d-flex justify-content-between ">
                                            <div className='title '>
                                                <span style={{color :'#72Bf44'}} onClick={() => activate() }>Вход </span>
                                                <span  className='mx-3'>|</span>
                                                <span onClick={() => activate1() }> <Button>Регистрация</Button> </span>
                                            </div>
                                            <Button className='closeBtn' onClick={() => {setOpenModal(false)}}><CloseRounded /></Button>
                                        </div>
                                        <div className="UserinputBlock d-flex flex-column ">
                                            <input type="text" placeholder='Введите имя'name='text'required />
                                            <input type="email" placeholder='Введите e-mail' name="email" id="" required />
                                            <Button type="sumbit" style={{color:'#fff', backgroundColor:' #72BF44', textTransform: 'capitalize', borderRadius:'6px',padding:'10px'}}  className='mt-4'>Войти</Button>
                                        </div>
                                        <div className="foooter d-flex flex-column mt-2 ">
                                            <span className='my-2'>Забыли пароль?</span>
                                            <span className='my-2'>Войти как пользователь</span>
                                        </div>
                                        <div className="footerbtn d-flex ">
                                            <Button className='me-4'>
                                                <img className='me-2' src={Google} alt="" />
                                                Google
                                            </Button>
                                            <Button>
                                                <img className='me-2' src={facebookbtn} alt="" />
                                                Facebook
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="center-wrap">
                                    <div className="section">
                                    <div className="d-flex justify-content-between ">
                                            <div className='title '>
                                                <span  onClick={() => activate() }> <Button>Вход</Button>  </span>
                                                <span  className='mx-3'>|</span>
                                                <span onClick={() => activate1() } style={{color :'#72Bf44'}} >Регистрация</span>
                                            </div>
                                            <Button className='closeBtn' onClick={() => {setOpenModal(false)}}><CloseRounded /></Button>
                                        </div>
                                        <div className="UserinputBlock d-flex flex-column ">
                                            <input type="text" placeholder='Введите имя' name='text' />
                                            <input type="email" placeholder='Введите e-mail' name="email" id="" />
                                            <input type='tel' placeholder='Телефон' name='phone' />
                                            <Button style={{color:'#fff', backgroundColor:' #72BF44', textTransform: 'capitalize', borderRadius:'6px',padding:'10px'}}  className='mt-4'>Зарегистрироиваться</Button>
                                        </div>
                                        <div className="foooter d-flex flex-column mt-2 ">
                                            <span className='my-2'>Войти как пользователь</span>
                                        </div>
                                        <div className="footerbtn d-flex ">
                                            <Button className='me-4'>
                                                <img className='me-2' src={Google} alt="" />
                                                Google
                                            </Button>
                                            <Button>
                                                <img className='me-2' src={facebookbtn} alt="" />
                                                Facebook
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    </UserModalWrapper>
  )
}

export default UserModal
