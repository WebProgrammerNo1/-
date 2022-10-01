import React from 'react'
import { useParams } from 'react-router-dom'
import Delivery from '../Delivery/Delivery';
import LikeList from '../LikeList/LikeList';
import MailingLists from '../MailingLists/MailingLists';
import MyBonus from '../MyBonus/MyBonus';
import Myorder from '../MyOrder/Myorder';
import MyUser from '../MyUser/MyUser';
import Payment from '../Payment/Payment';
import VieweProducts from '../VieweProducts/VieweProducts';
import MenuWrapper from './MenuWrapper'

const Menu = ({size, sizelike, likecart}) => {
    const { menu } = useParams();
    return (
        <MenuWrapper>
            <MyUser size={size} sizelike={sizelike}>
                {menu == "myorder" && <Myorder />}
                {menu == "likelist" && <LikeList likecart={likecart} />}
                {menu == "vieweproducts" && <VieweProducts />}
                {menu == "mailinglists" && <MailingLists />}
                {menu == "mybonus" && <MyBonus />}
                {menu == "payment" && <Payment />}
                {menu == "delivery" && <Delivery />}
            </MyUser>
        </MenuWrapper>
    )
}

export default Menu;