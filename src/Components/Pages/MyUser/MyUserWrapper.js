import styled from "styled-components";
import UserImg from '../../../images/MyUser.svg'
import UserImgWhite from '../../../images/UserImgWhite.svg'
import BagShop from '../../../images/bagshop.svg'
import bagshopWhite from '../../../images/bagshopWhite.svg'
import Heart from '../../../images/HeartBlack.svg'
import HeartWhite from '../../../images/HeartWhite.svg'
import Eye from '../../../images/eye.svg'
import eyeWhite from '../../../images/eyeWhite.svg'
import qungiroqcha from '../../../images/qungiroqcha.svg'
import qungiroqchaWhite from '../../../images/qungiroqchaWhite.svg'
import Gift from '../../../images/Gift.svg'
import GiftWhite from '../../../images/GiftWhite.svg'
import Card from '../../../images/Card.svg'
import CardWhite from '../../../images/CardWhite.svg'
import Location from '../../../images/Location.svg'
import LocationWhite from '../../../images/LocationWhite.svg'

const MyUserWrapper = styled.div`

.dashbort{
    margin: 0 0 10px 110px;
    
    .ListItem{
        border-bottom: 1px solid #E0E0E0;
        border-right: 1px solid #E0E0E0;
        color: #383838 !important;
    
        .ListItemIcon{
            background: url(${UserImg}) no-repeat center center / 26px;
            color: #fff;
            width: 50px;
            height: 50px;
        }
    }

    .MuiListItem-button:hover {
        text-decoration: none;
        background-color: #72BF44 !important;
        border-radius:4px;
        .ListItemIcon{
            background: url(${UserImgWhite}) no-repeat center center / 26px;
            width: 50px;
            height: 50px;
        }
        .ListItemText{
            span{
                color: #fff;
            }
        }
    }
    a:nth-child(2){
        .ListItemIcon{
            background: url(${BagShop}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${bagshopWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(3){
        .ListItemIcon{
            background: url(${Heart}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${HeartWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(4){
        .ListItemIcon{
            background: url(${Eye}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${eyeWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(5){
        .ListItemIcon{
            background: url(${qungiroqcha}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${qungiroqchaWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(6){
        .ListItemIcon{
            background: url(${Gift}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${GiftWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(7){
        .ListItemIcon{
            background: url(${Card}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${CardWhite}) no-repeat center center / 26px;
            }
        }
    }
    a:nth-child(8){
        .ListItemIcon{
            background: url(${Location}) no-repeat center center / 26px;
        }
        .MuiListItem-button:hover{
            .ListItemIcon{
                background: url(${LocationWhite}) no-repeat center center / 26px;
            }
        }
    }

    
   
    
}

`;

export default MyUserWrapper