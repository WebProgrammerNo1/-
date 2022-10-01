import { Button } from '@mui/material'
import React from 'react'
import Footer from '../../Footer'
import GreenRegister from '../../GreenRegister/GreenRegister'
import Header from '../../Header'
import LikeCartWrapper from './LikeCartWrapper'

const LikeCart = ({ likecart, sizelike, setLikeCart, size}) => {

    const handleDeleteLike = (id) => {
        const arr = likecart.filter((v) => v.id !== id);
        setLikeCart(arr);
      };

      const handleCleareLike = () => {
        setLikeCart([]);
      }


  return (
  <>
    <Header sizelike={sizelike} size={size}/>
    <LikeCartWrapper>
        <div className="containers">
            <div className="Like-Cart-Block">
                <div className="likeCart-Title">
                <h2>My Like Cart</h2>
                </div>
                <div className="likeCartMain">
                    <div className="likeCartProducts">
                        <div className="likeCartProductsTitle">
                        <span>Товар</span>
                        <span>Описание</span>
                        <span>Цена</span>
                        </div>
                        {likecart.length === 0 &&( <div className='emptyPructs'> <h1>No result</h1> </div> )}
                        {likecart.map((v) => (
                            <div className="likeCartProducts-show" key={v.id} >
                            <div className="likeCartProducts-img">
                                <img style={{width: '173px', height: '173px'}} src={v.image} alt="" />
                            </div>
                            <div className="likeCartProductsInfo">
                                <div className="likeCartProductsInfoHeader">
                                    <div className="likeCartProductsInfoHeadeTitle">
                                    <span>{v.name}</span>
                                    <span>Размер:  180 x 241 x 123</span>
                                    </div>
                                    <div className="likeCartProductsInfoHeadePrice">
                                        <span>{v.price} ₽</span>
                                        <span>{v.oldprice} ₽</span>
                                    </div>
                                </div>
                                <div className="likeCartProducts-info_footer d-flex">
                                    <span>Код Товара: 423134134</span>
                                    <div className="likeCartProducts-info-Foote-buttton">
                                    <Button onClick={() => handleDeleteLike(v.id)} style={{color: '#BDBDBD'}}>
                                        <span>Удалить</span> 
                                    </Button> 
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="cartRegister">
                        <div className="likeAllClear">
                        <Button  onClick={()=>handleCleareLike()}><span style={{color: '#BDBDBD'}}>Очистить Корзину</span></Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </LikeCartWrapper>
    <GreenRegister/>
    <Footer/>
  </>
  )
}

export default LikeCart
