import styled from "styled-components";
import Delete from '../../../images/Delete.svg'
import DeleteGreen from '../../../images/DeleteGreen.svg'
import Heartdisabled from '../../../images/Heartdisabled.svg'
import Heartgreen from '../../../images/Heartgreen.svg'


const CartWrapper = styled.div`
 
 .Cart-Block{
   

    .Cart-Title{
        h2{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 65px;
            color: #383838;
            margin: 30px 0 !important;
        }
    }

    .CartMain{
        display: flex;
        .cartRegister{
            
            .AllClear{
                display: flex;
                justify-content: flex-end;
                margin-bottom: 10px;

                Button{
                    background-color: #fff;
                    text-transform: capitalize;
                    margin-top: -10px;
                    &:hover{
                        color: #72BF44 !important;
                        
                    }
                    span{
                        padding: 6px  20px 0 0 !important;
                        &:hover{
                            color: #72BF44 !important;
                        }
                    }
                }
                .css-1e6y48t-MuiButtonBase-root-MuiButton-root{
                    background-image:url(${Delete});
                    background-repeat:no-repeat;
                    background-position:right;
                    &:hover {
                        background-image:url(${DeleteGreen});
                        background-repeat:no-repeat;
                    }
                }
            }
        }

        .CartProducts{
            width: 1036px;
            .CartProductsTitle{
                display: flex;
                border-bottom: 1px solid #E0E0E0;
                span{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    color: #BDBDBD;
                    padding-bottom: 20px !important;
                }
                span:nth-child(2){
                    margin: 0 240px !important;
                }
                span:nth-child(3){
                    margin: 0 240px 0 0 !important;
                    width: 55px;
                }
        
            }
        
            .emptyPructs{
                 display: flex;
                 justify-content: center;
                 align-items:center;
                 margin-top: 160px;
            }
        
            .CartProducts-show{
                border-bottom: 1px solid #E0E0E0;
                padding: 20px 0 !important;
                display: flex;
        
                .CartProductsInfo{
                    display: flex;
                    flex-direction:column;
                    justify-content:space-between;
                    margin-left: 30px !important;
                    .CartProductsInfoHeader{
                        display: flex;
                        span{
                            display: block;
                        }
                        .CartProductsInfoHeadeButton{
                            padding:0 125px 0 125px;
                            display: flex;
                            align-items: center;
                            font-weight: 600;
                            font-size: 24px;
                            line-height: 33px;
                            display: flex;
                            align-items: center;
                            color: #383838;
                            Button{
                                color: #383838;
                                border: 1px solid #E0E0E0;
                                border-radius: 10px;
                                font-weight: 600;
                                font-size: 20px;
                                line-height: 25px;
                                
                            }
                            
                            
                        }
                        .CartProductsInfoHeadePrice{
                            span:nth-child(2){
                                text-decoration-line: line-through;
                                color: #D2CDCD;
                            }
                        }
                    }
        
                    .CartProducts-info_footer{
                        display: flex;
                        justify-content:space-between;
                        align-items: center;
                        span{
                            color: #BDBDBD;
                        }
                        .CartProducts-info-Foote-buttton{
                            Button{
                                background-color: #fff;
                                text-transform: lowercase;
                                &:hover{
                                    color: #72BF44 !important;
                                }
                            span{
                                padding: 6px  15px 0 0 !important;
                                &:hover{
                                    color: #72BF44 !important;
                                }
                            }
                        }
                        .css-1e6y48t-MuiButtonBase-root-MuiButton-root:nth-child(1) {
                            background-image:url(${Heartdisabled});
                            background-repeat:no-repeat;
                            background-position:right;
                            background-size: 21px;
                            span{
                                padding: 2px  20px 0 0 !important;
                                
                            }
                            &:hover {
                                background-image:url(${Heartgreen});
                                background-repeat:no-repeat;
                            }
                        }
                        .css-1e6y48t-MuiButtonBase-root-MuiButton-root:nth-child(2) {
                            background-image:url(${Delete});
                            background-repeat:no-repeat;
                            background-position:right;
                            &:hover {
                                background-image:url(${DeleteGreen});
                                background-repeat:no-repeat;
                            }
                        }
                        
                    }
                }
            }
        
           }

        }
        .cartRegisterBlock{
            padding: 20px 30px;
            background-color: #F8F8F8;
            border-radius:6px;
            Button{
                text-transform: capitalize;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            #outlined-number:focus {
                outline: none !important;
                border: none !important;
            }
            MuiInputBase-input:focus {
                outline: none;
                border: none;
            }
            .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
                border-color: #BDBDBD;
            }
            .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
                border-color: #BDBDBD;
            }

            .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
                border-color:#72BF44 !important;
                border-width: 1px;
            }

        }
    }
    
}
`;
export default CartWrapper;