import { IconButton } from '@mui/material'
import React from 'react'
import LikeListWrapper from './LikeListWrapper'

const LikeList = ({likecart}) => {
  return (
    <LikeListWrapper>
      <h2 className=' ms-4 LikeLisTitle'>Список желаний</h2>
      {likecart.length === 0 &&( <div className='d-flex justify-content-center'> <h1>No result</h1> </div> )}
      <div className="d-flex flex-wrap">
        {likecart?.map((item)=>(
            <div className='ms-5 my-2'>
                  <div key={item.id} className="LikeLisproductBlock">
                      <div className="productImg">
                          <img src={item.image} alt="img_bor" />
                      </div>
                      {/* <IconButton onClick={() => handleClickLike( item )} className='IconButtonlike'>qwi</IconButton>
                      <IconButton onClick={() => handleClick(item)} className='IconButtonbuy'>qwi</IconButton> */}
                  </div>
                  <div className="LikeListproductTitle">
                      <h2>{item.name}</h2>
                      <span>{item.price}</span>
                      <span>{item.oldprice}</span>
                  </div>
            </div>
          ))}

      </div>
    </LikeListWrapper>
  )
}

export default LikeList
