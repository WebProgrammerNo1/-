import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';


const GreenCheckbox = withStyles({
  root :{
    color: " #72BF44 !important",
    '&$checked' : {
      color: " #72BF44 !important",
    },
  },

  checked : {},

}) ((props) => <Checkbox color="default" {...props}/>);

const MailingLists = () => {

  const [state, setState] = useState({
    checkedA : true,
    checkedB : true,
    checkedC : false,
    checkedD : true,
    checkedE : true,
    checkedF : true,
    checkedG : false,
    checkedH : true,
    checkedJ : true,
  })

  const handaleCheckbox = (event) => {
    setState({...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="container">
      <div className="ms-4  pt-5">
        <h1 className='ps-1'>Рассылки</h1>
        <div className="d-flex">
          <div className="block1 w-50 pe-3 me-5">
            <h5 style={{color:"#828282"}} >Виды рассылок</h5>
            <FormControlLabel className='ps-2 mt-3' control={<GreenCheckbox className='me-2' checked={state.checkedA}  onChange={handaleCheckbox} name="checkedA" />} 
            label ="Новости, акции компании"
            />
          <p style={{color:"#828282"}} className='ms-4 mt-2 mb-3 pe-5'>Будьте в курсе всех событий магазина, просматривайте обзоры.</p>
          <FormControlLabel className='ps-2'  control={<GreenCheckbox className='me-2' checked={state.checkedB}  onChange={handaleCheckbox} name="checkedB" />} 
            label ="Информация об акциях, промокодах и скидках"/>
            <p style={{color:"#828282"}} className='mt-2 mb-3 ms-4'>Периодически мы проводим акции со скидками, розыгрышами, промокодами и прочими инструментами, которые могут помочь вам сэкономить на покупке, подобрать подарок себе или близким. Мы обязательно сообщим вам о таких кампаниях, и вы сможете покупать на Розетке по самым лучшим ценам.</p>
          <FormControlLabel className='ps-2'  control={<GreenCheckbox className='me-2' checked={state.checkedC}  onChange={handaleCheckbox} name="checkedC" />} 
            label ="Персональные рекомендации"/>
            <p style={{color:"#828282"}} className='mt-2 mb-3 ms-4'>Ежедневно мы изучаем поведение миллионов наших клиентов. Основываясь на этой информации, мы можем предложить вам товар, который мог бы вас заинтересовать.</p>
          <FormControlLabel  className='ps-2' control={<GreenCheckbox className='me-2' checked={state.checkedD}  onChange={handaleCheckbox} name="checkedD" />} 
            label ="Персональные скидки и предложения"/>
            <p style={{color:"#828282"}} className='mt-2 mb-3 ms-4'>Мы сообщим вам, если у нас появится скидка на товар, которым вы интересовались, товар, который вы добавили в список желаний, или товар, который подобрала наша рекомендационная система.</p>
          </div>
          <div className="block2 ps-5 ms-5 ">
            <h5 style={{color:"#828282"}}>Каналы связи</h5>
            <FormControlLabel className='ps-2 my-2'  control={<GreenCheckbox className='me-2' checked={state.checkedE}  onChange={handaleCheckbox} name="checkedE" />} 
            label ="Email-письма"/>
            <FormControlLabel className="d-block ps-2 my-2"   control={<GreenCheckbox className='me-2' checked={state.checkedF}  onChange={handaleCheckbox} name="checkedF" />} 
            label ="Сообщения в Viber"/>
            <FormControlLabel className="d-block ps-2 my-2"  control={<GreenCheckbox className='me-2' checked={state.checkedG}  onChange={handaleCheckbox} name="checkedG" />} 
            label ="SMS-сообщения"/>
            <FormControlLabel className='ps-2 my-2' control={<GreenCheckbox className='me-2' checked={state.checkedH}  onChange={handaleCheckbox} name="checkedH" />} 
            label ="Уведомления в мобильном приложении"/>
            <FormControlLabel className='ps-2 my-2' control={<GreenCheckbox className='me-2' checked={state.checkedJ}  onChange={handaleCheckbox} name="checkedJ" />} 
            label ="Уведомления в веб-браузере"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailingLists;
