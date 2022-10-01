import { Button, IconButton } from '@mui/material'
import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import MyUserWrapper from './MyUserWrapper';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


const dashboardData = [

    {to:"/myuser/", title:"User"},
    {to:"/myuser/myorder", title:"Мой заказы"},
    {to:"/myuser/likelist", title:"Список желаний"},
    {to:"/myuser/vieweproducts", title:"Просмотренные товары"},
    {to:"/myuser/mailinglists", title:"Рассыслки"},
    {to:"/myuser/mybonus", title:"Мой Бонусный счет"},
    {to:"/myuser/payment", title:"Оплата"},
    {to:"/myuser/delivery", title:"Доставка"}

]

const MyUser = ({sizelike, size, children}) => {
  return (
    <>
    <Header sizelike={sizelike} size={size}/>
        <MyUserWrapper>
            <div className="containers">
                <div className="d-flex">
                    <div className="dashbort mt-2 flex-shrink-0">
                        <List>
                            {dashboardData.map((v, i) => <Link key={i} to={v.to}>
                                {/* <a > */}
                                    {/* <Slide delay={100*i}> */}
                                        <ListItem button className='ListItem' >
                                            <ListItemIcon className='ListItemIcon'>
                                            </ListItemIcon>
                                            <ListItemText className='ListItemText' primary={v.title}/>
                                        </ListItem>
                                    {/* </Slide> */}
                                {/* </a> */}
                            </Link>)
                            }
                        </List>
                    </div>
                    <div className="dashbaordMenu flex-fill">
                    <div className='content'>
                        {children}
                    </div>
                </div>
                </div>
            </div>
        </MyUserWrapper>
    <Footer/>
    </>
  )
}

export default MyUser
