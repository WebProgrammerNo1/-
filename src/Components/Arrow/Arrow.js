import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../images/arrowDown.svg'


const Arrow = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisable =() =>{
   const scrolled =  document.documentElement.scrollTop;
   if(scrolled > 400){
    setVisible(true)
   }
   else if(scrolled <= 400){
    setVisible(false)
   }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisable);

  return (
    <ArrowWrapper>
      <div className="arrowBlock" style={{ display : visible ? 'inline' : 'none'}}>
            <div onClick={scrollToTop } className="arrowDown" >
                <img src={arrow} alt="" />
            </div>
      </div>
    </ArrowWrapper>
  )
}

export default Arrow
 
const ArrowWrapper = styled.div`

.arrowBlock{
    position: relative;
    .arrowDown{
        position: fixed;
        right: 60px;
        bottom: 2%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #72BF44;
        z-index:8;
        cursor: pointer;
    }

}


`;