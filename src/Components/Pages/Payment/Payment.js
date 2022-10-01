import { Button, FormControlLabel, Radio, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import MainScreen from '../../Paycard';
import PaymentWrapper from './PaymentWrapper'

const GreenRadio = withStyles({
  root :{
    color: " #72BF44 !important",
    '&$checked' : {
      color: " #72BF44 !important",
    },
  },

  checked : {},

}) ((props) => <Radio color="default" {...props}/>);

const Payment = () => {

  const [state, setState] = useState({
    checkedA : false,
    checkedB : false,
    checkedC : false,
  })

  const handaleRadio = (event) => {
    setState({...state, [event.target.name]: event.target.checked });
  };
  return (
    <PaymentWrapper>
      <div className="ps-5 containers">
        <h1 className='mt-5'>Оплата pages</h1>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h5 className='my-3'style={{color:"#828282"}} >Выберите способ оплаты</h5>
            <FormControlLabel className='ps-2 mt-3' control={<GreenRadio className='me-2' 
            checked={state.checkedA}  onChange={handaleRadio} 
            name="checkedA" />} 
            label ="Наличны"
            />
            <FormControlLabel className='ps-2 mt-3' control={<GreenRadio className='me-2' 
            checked={state.checkedB}  onChange={handaleRadio} 
            name="checkedB" />} 
            label ="Картой"
            />
            <FormControlLabel className='ps-2 mt-3' control={<GreenRadio className='me-2' 
            checked={state.checkedC}  onChange={handaleRadio} 
            name="checkedC" />} 
            label ="По счету"
            />
            <Button className=' mt-4' style={{backgroundColor: "#72BF44", color: '#fff', textTransform: "capitalize", padding:"12px"}} >Сохранить</Button>
          </div>
          <div className='flex-fill'>
            <MainScreen/>
          </div>
        </div>
      </div>
    </PaymentWrapper>
  )
}

export default Payment
