import { Button } from '@mui/material'
import React from 'react'
import NewspromotionsWrapper from './NewspromotionsWrapper'
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import img8 from '../../images/image 8.png'
import img9 from '../../images/image 9.png'

const Newspromotions = () => {
  return (
    <NewspromotionsWrapper>
        <div className="News_promotions">
            <div className="containers">
                <div className="News_promotionBlock">
                    <h2>Новости и акции</h2>
                    <div className="Collection">
                        <div className="Collectionfrist blocks">
                            <div className="CollectionTitle">
                                <span>Коллекция</span>
                                <h1>Новый Стул Denim Green</h1>
                                <Button variant="outlined" color="success" style={{ color: "#72BF44", border:"1px solid #72BF44" }} endIcon={<EastRoundedIcon className='EastRoundedIcon' style={{ color: "#72BF44" , marginLeft: "7px" }} />}>
                                    Показать все
                                </Button>

                            </div>
                            <img src={img8} alt="" />
                        </div>
                        <div className="Collectionsecod blocks">
                            <div className="CollectionTitle">
                                <span>Коллекция</span>
                                <h1>Кухонный стол Eames DT-03</h1>
                                <Button variant="outlined" color="success" style={{ color: "#72BF44", border:"1px solid #72BF44" }} endIcon={<EastRoundedIcon className='EastRoundedIcon' style={{ color: "#72BF44" , marginLeft: "7px" }} />}>
                                    Показать все
                                </Button>

                            </div>
                            <img src={img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </NewspromotionsWrapper>
  )
}

export default Newspromotions
