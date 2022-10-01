import styled from "styled-components";
import "@fontsource/open-sans"
const HeaderWrapper = styled.div`
    color: #383838;
    font-family: "Open Sans";
    /* position: fixed;
    z-index: 15;
    top: 0;
    background-color: #fff; */
.containers{
 margin: 0 auto;
 padding: 0 20px;
}
.dostavka{
 background: #72BF44;
 height: 46px;
 font-size: 16px;
 line-height: 22px;
 display: flex;
 justify-content: center;
 align-items: center;
 img{
    padding-right: 10px;
 }
 p{
    color: #fff;
 }
 
}

.headerBlock{
    padding: 30px 0;
    display: flex;
    align-items: center;
    .apps{
        display: flex;
        width: 158px;
        height:58px;
        background: #72BF44;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        margin: 0 75px 0 87px;
        cursor: pointer;
        p{
            font-family: "Open Sans";
            font-weight: 600;
            font-size: 17px;
            line-height: 23px;
            letter-spacing:2px;
            margin-left: 6px !important;
            color: #fff;
        }
    }
    .searchbutton{
        position: relative;
        input{
            width:483px;
            height:58px;
            background: #F5F5F5;
            border-radius: 8px;
            outline: #72BF44;
            border: none;
            font-size: 15px;
            font-family: "Open Sans";
            padding: 19px 24px;
            
        }
        .search{
            position: absolute;
            right: 20px;
            top: 19px;
            cursor: pointer;
        }
    }
    .phonNumber{
        margin: 0 68px !important;
        color: #383838;
        cursor: pointer;
        font-size: 20px;
        padding: 6px 8px;
        &:hover{
            background-color:#fff;
        }
    }
    .headerIconBlock{
        display: flex;
        align-items: center;
        .buyBlock{
            a{
                position: relative;
                .buynumber{
                    width: 23px;
                    bottom: -10px;
                    display: flex;
                    height: 23px;
                    border-radius: 50%;
                    position: absolute;
                    align-items: center;
                    justify-content: center;
                    background-color: #72BF44;
                    span{
                        color: #fff;
                        font-size: 12px;
                        margin: 0 !important;
                        
                    }
                }
            }
            
        }
        .cartblock{
            margin: 0 33px;
            a{
                position: relative;

                .cartnumber{
                    width: 23px;
                    bottom: -10px;
                    height: 23px;
                    display: flex;
                    border-radius: 50%;
                    position: absolute;
                    align-items: center;
                    justify-content: center;
                    background-color: #72BF44;
                    span{
                        font-size: 12px;
                        color: #fff;
                        margin: 0 !important;
    
                    }
                }
            }

        }
        
        .myuser{
            a{
                /* z-index: -1; */
            }
        }
        .MuiButtonBase-root {
            padding: 10px !important;
        }
    }
}
.headerMenu{
    ul{
        
        li{
            display: inline;
            margin-right: 20px !important;
            &:last-child{
                margin: 0 !important;
            }
            Button{
                padding: 12px;
                color: #383838;
                font-size: 15px;
                font-weight: 600;
                line-height: 23px;
                border-radius: 8px;
                background: #F8F8F8;
                font-family: 'Open Sans';

            }
        }
    }
}


`;
export default HeaderWrapper;