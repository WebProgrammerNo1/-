import { Button } from '@mui/material'
import React from 'react'
import GreenRegisterWrapper from './GreenRegisterWrapper'
import raketa from '../../images/raketa.svg'
import Message from '../../images/Message.svg'
import Message2 from '../../images/Message2.svg'
import line from '../../images/line.svg'

const GreenRegister = () => {
  return (
    <GreenRegisterWrapper>
        <div className="containers">
      <div className="GreenRegister">
            <div className="GreenRegisterTitle">
                <h2>Подпишитесь на рассылку</h2>
                <span>Узнавайте первыми о выгодных предложениях !</span>
            </div>
            <div className="GreenRegisterBlock">
                <input type="text" name="" id="" placeholder="Введите e-mail" />
                <Button  style={{ color: "#fff" }}> <img src={raketa} alt="" /> Подписаться</Button>
                <span>Нажимая на кнопку, вы принимаете условия <u>обработки персональных данных</u> </span>
            </div>
            <div className="imgblock">
                <img className='message' src={Message} alt="" />
                <img className='message2' src={Message2} alt="" />
                <img className='line' src={line} alt="" />
            </div>
        </div>
      </div>
    </GreenRegisterWrapper>
  )
}

export default GreenRegister
