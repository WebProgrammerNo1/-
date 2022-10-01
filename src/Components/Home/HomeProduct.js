import React from 'react'
import { Button } from '@mui/material';
import HomeWrapper from './HomeWrapper';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 9,
    name:'Столы',
    number: '80шт',
    image: require('../../images/Столы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 10,
    name:'Кровати',
    number: '80шт',
    image: require('../../images/Кровати.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {id: 11,
    name:'Тумбы',
    number: '80шт',
    image:require('../../images/Тумбы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 12,
    name:'Шкафы',
    number: '80шт',
    image:require('../../images/Шкафы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 13,
    name:'Столы',
    number: '80шт',
    image: require('../../images/Столы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 14,
    name:'Кровати',
    number: '80шт',
    image: require('../../images/Кровати.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 15,
    name:'Тумбы',
    number: '80шт',
    image:require('../../images/Тумбы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 16,
    name:'Шкафы',
    number: '80шт',
    image:require('../../images/Шкафы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 17,
    name:'Столы',
    number: '80шт',
    image: require('../../images/Столы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 18,
    name:'Кровати',
    number: '80шт',
    image: require('../../images/Кровати.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 19,
    name:'Тумбы',
    number: '80шт',
    image:require('../../images/Тумбы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 20,
    name:'Шкафы',
    number: '80шт',
    image:require('../../images/Шкафы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id: 21,
    name:'Столы',
    number: '80шт',
    image: require('../../images/Столы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },
  {
    id:22,
    name:'Кровати',
    number: '80шт',
    image: require('../../images/Кровати.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  },  
  {
    id: 23,
    name:'Тумбы',
    number: '80шт',
    image:require('../../images/Тумбы.png'),
    amount: 1,
    price: 35990,
    oldprice: 75430
  }

]


const HomeProduct = ({handleAllProduct}) => {

  
    
  return (
   <HomeWrapper>
    <div className="containers">
        <div className="products">
            {data?.slice(0, 9).map((item, index)=>(
                  <div key={index} className="productBlock">
                        <div className="productTitle">
                            <h2>{item.name}</h2>
                            <span>{item.number}</span>
                        </div>
                        <div className="productImg">
                            <img src={item.image} alt="img_bor" />
                        </div>
                  </div>
                ))}
                <div className="bttn">
                  <Link to="/allProductShow" >
                    <Button onClick={() => handleAllProduct(data)} variant="outlined" color="success" style={{ color: "#72BF44", border:"1px solid #72BF44" }} endIcon={<EastRoundedIcon className='EastRoundedIcon' style={{ color: "#72BF44" , marginLeft: "7px" }} />}>
                      Показать все
                    </Button>
                  </Link>
                </div>
        </div>

    </div>
   </HomeWrapper>
  )
}


export default HomeProduct

