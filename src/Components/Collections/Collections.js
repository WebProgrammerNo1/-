import CollectionsWrapper from './CollectionsWrapper'
import image11 from '../../images/image11.png'
import plus from '../../images/plus.svg'
import burchak from '../../images/Polygon.svg'
import plusWhite from '../../images/plusWhite.svg'
import { useState } from 'react'


const date = [
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
  {
    name: 'Кровать Bella 1.6',
    price: '35 990 ₽'
  },
]


const Collections = () => {
  const[open, setOpen] = useState(false)
  const[pluss, setPlus] = useState(plus)
  
    return (
    <CollectionsWrapper>
        <div className="containers">
            <div className="Collections">
              <div className="CollectionsTitle">
                  <h2>Коллекии</h2>
              </div>
              <div className="CollectionsBlock" onClick={()=>setOpen("dnone")}>
                    <img style ={{width:'100%'}}src={image11} alt="" />
                    {date?.map((v, i) =>
                      <div className="productInform" key={i}>
                        <div onMouseEnter={()=>setOpen(i)} onClick={()=>setOpen("dnone")} className="plusBlock" style = {{ backgroundColor:`${i === open && 'black' || 'white' }` }} >
                          <img  style ={{width:'20px'}} src={ `${i === open && plusWhite || pluss }`} alt="" />
                        </div>
                        <div className={`dnone ${i === open && "dblock"}`}>
                          <div className="burchak">
                            <img src={burchak} alt="" />
                          </div>
                          <div className="producutInfoTitle">
                            <h2>{v.name}</h2>
                            <span>{v.price}</span>
                          </div>
                        </div>
                      </div>
                    )}
              </div>
            </div>
        </div>
    </CollectionsWrapper>
  )
}

export default Collections
