import React, { useEffect, useState } from 'react'
import CartWrapper from './CartWrapper'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Button from '@mui/material/Button';
import GreenRegister from '../../GreenRegister/GreenRegister'
import Arrow from '../../Arrow'
import TextField  from '@material-ui/core/TextField';

const Cart = ({ setData, date, setAllproductDataCart, setCart, sizelike, handleClickLike }) => {
  const [price, setPrice] = useState(0);

  const handleDelete = (id) => {
    const arr = date.filter((v) => v.id !== id);
    setCart(arr) || setAllproductDataCart(arr);
  };
  
  useEffect(() => {
    handlePrice();
  });


  const handlePrice = () => {
    let ans = 0;
    date.map((v) => (ans += v.amount * v.price));
    setPrice(ans);
  };

  const handleChange = (v, d) => {
    const ind = date.indexOf(v) ;
    const arr = date;
    arr[ind].amount += d;
    if (arr[ind].amount === 0)
      arr[ind].amount = 1;
      setData([])
  };
  

  const handleCleare = () => {
    setCart([]) || setAllproductDataCart([]);
  }
  
  

  return (
    <>
      <Header sizelike={sizelike} size={date.length}/>
      <CartWrapper>
        <div className="containers">
          <div className="Cart-Block">
            <div className="Cart-Title">
              <h2>Моя Корзина</h2>
            </div>
            <div className="CartMain">
              <div className="CartProducts">
                <div className="CartProductsTitle">
                  <span>Товар</span>
                  <span>Описание</span>
                  <span>Кол-во</span>
                  <span>Цена</span>
                </div>
                {date.length === 0 &&( <div className='emptyPructs'> <h1>No result</h1> </div> )}
                {date.map((v) => (
                <div className="CartProducts-show" key={v.id} >
                  <div className="CartProducts-img">
                    <img style={{width: '173px', height: '173px'}} src={v.image} alt="" />
                  </div>
                  <div className="CartProductsInfo">
                      <div className="CartProductsInfoHeader">
                        <div className="CartProductsInfoHeadeTitle">
                          <span>{v.name}</span>
                          <span>Размер:  180 x 241 x 123</span>
                        </div>
                        <div className="CartProductsInfoHeadeButton">
                          <Button onClick={() => handleChange(v, -1)} variant="outlined">-</Button>
                          <span className='mx-3'>{v.amount}</span>
                          <Button onClick={() => handleChange(v,  1)} variant="outlined">+</Button>
                        </div>
                        <div className="CartProductsInfoHeadePrice">
                            <span>{v.price} ₽</span>
                            <span>{v.oldprice} ₽</span>
                        </div>
                      </div>
                      <div className="CartProducts-info_footer d-flex">
                        <span>Код Товара: 423134134</span>
                        <span>{price} ₽</span>
                        <div className="CartProducts-info-Foote-buttton">
                          <Button onClick={() => handleClickLike( v )} className='me-2' style={{color: '#BDBDBD'}}  >
                            <span>В Избранное</span>
                          </Button>
                          <Button onClick={() => handleDelete(v.id)} style={{color: '#BDBDBD'}}>
                            <span>Удалить</span> 
                          </Button>
                        </div>
                      </div>
                  </div>
                </div>
                ))}

              </div>
              <div className="cartRegister w-100 ms-4">
                <div className="AllClear">
                  <Button  onClick={()=>handleCleare()}><span style={{color:'#BDBDBD'}}>Очистить Корзину</span></Button>
                </div>
                <div className="cartRegisterBlock">
                  <div className="cartRegisterInfo d-flex justify-content-between">
                    <h3 >Итого</h3>
                    <span className='mt-3' style={{color:'#BDBDBD'}}>{date.length} товара</span>
                  </div>
                    <li className=" mt-3 d-flex justify-content-between"><span>Количество Товара:</span><span>{date.length} шт</span></li>
                    <li className=" mt-3 d-flex justify-content-between"><span>Стоимость:</span><span>{price} ₽</span></li>
                    <h3 className='mb-3'>Ваши контактные данные</h3>
                    <TextField className='me-2' id='outlined-text' variant='outlined' type='text'  placeholder='Ваше имя*'  />
                    <TextField className='ms-2' id="outlined-number" variant='outlined' type='number' placeholder='Телефон*'  />
                    <h3 className='my-3'>Адрес Доставки</h3>
                    <TextField id='outlined-text' variant='outlined' type='text'   placeholder='Город, улица, номер дома, квартира' fullWidth />
                    <h3 className='my-3'>Оплата</h3>
                    <TextField id="outlined-number" variant='outlined' type='number' placeholder='Оплата при получении*' fullWidth />
                    <Button style={{color:'#fff', backgroundColor:' #72BF44', textTransform: 'capitalize', borderRadius:'4px' ,padding:'12px'}} fullWidth className='mt-3'>Оформить Заказ</Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </CartWrapper>
      <GreenRegister/>
      <Footer/>
      <Arrow/>
    </>
  )
}

export default Cart
