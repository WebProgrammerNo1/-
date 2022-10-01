import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import AllProductShowWrapper from './AllProductShowWrapper'
import GreenRegister from '../../GreenRegister/GreenRegister'
import { IconButton } from '@mui/material'

const AllProductShow = ({allproductData, handleClickAllProduct, size,  handleClickLike, sizelike}) => {
   
  return (
    <>
        <Header size={size} sizelike={sizelike}/>
        <AllProductShowWrapper>
        <div className="containers">
            <div className="mt-3 products">
                {allproductData?.map((item, index)=>(
                    <div key={index} className="productBlock">
                        <div className="productTitle">
                            <h2>{item.name}</h2>
                            <span>{item.number}</span>
                        </div>
                        <div className="productImg">
                            <img src={item.image} alt="img_bor" />
                        </div>
                        <div className="IconButtonBlock">
                            <IconButton onClick={() => handleClickLike( item )} className='IconButtonlike'>qwi</IconButton>
                            <IconButton  onClick={() => handleClickAllProduct(item)} className='IconButton IconButtonbuy'>qwi</IconButton>
                        </div>
                    </div>
                ))}
                    
            </div>
        </div>
        </AllProductShowWrapper>
        <GreenRegister/>
        <Footer/>
    </>
  )
}

export default AllProductShow
