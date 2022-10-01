import styled from "styled-components";
import Delete from '../../../images/Delete.svg'
import DeleteGreen from '../../../images/DeleteGreen.svg'
const LikeCartWrapper = styled.div`
.Like-Cart-Block{
   

   .likeCart-Title{
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

   .likeCartMain{
       display: flex;
       .cartRegister{
           
           .likeAllClear{
               display: flex;
               justify-content: space-between;

               Button{
                   background-color: #fff;
                   text-transform: capitalize;
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

       .likeCartProducts{
           width: 750px;
           .likeCartProductsTitle{
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
                   margin: 0 250px !important;
               }
               span:nth-child(3){
                   margin: 0 250px 0 0 !important;
               }
       
           }
       
           .emptyPructs{
                display: flex;
                justify-content: flex-end;
                margin-top: 40px;
           }
       
           .likeCartProducts-show{
               border-bottom: 1px solid #E0E0E0;
               padding: 20px 0 !important;
               display: flex;
       
               .likeCartProductsInfo{
                   display: flex;
                   flex-direction:column;
                   justify-content:space-between;
                   margin-left: 30px !important;
                   .likeCartProductsInfoHeader{
                       display: flex;
                       span{
                           display: block;
                       }
                       .likeCartProductsInfoHeadeButton {
                           padding:0 170px 0 160px;
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
                       .likeCartProductsInfoHeadePrice{
                        margin-left: 165px;
                           span:nth-child(2){
                               text-decoration-line: line-through;
                               color: #D2CDCD;
                           }
                       }
                   }
       
                   .likeCartProducts-info_footer{
                       display: flex;
                       justify-content:space-between;
                       align-items: center;
                       span{
                           color: #BDBDBD;
                       }
                       .likeCartProducts-info-Foote-buttton{
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
           }
       
          }
       }
   }
}
`;
export default LikeCartWrapper;