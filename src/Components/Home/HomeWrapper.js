import styled from "styled-components";

const HomeWrapper = styled.div`
 .products{
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
     .productBlock{
         width: 285px !important;
         height: 236px !important;
         background: #F5F5F5;
         border-radius: 8px;
         position: relative;
         margin:7px;
         .productImg{
             position: absolute;
             right: 8px;
             bottom: -1px;
         }
         .productTitle{
             padding: 18px 0 0 14px;
             span{
                 display: inline-block;
                 margin-top: 7px;
             }
         }
         
     }
     .bttn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 285px !important;
        height: 236px !important;
        background: #F5F5F5;
        margin:5px;
        Button{
            border-radius: 8px;
            padding: 12px;
        }
        Button:hover{
            background-color:#72BF44;
            color: #fff !important;
            border:none;
        }
        Button:hover .EastRoundedIcon{
            color: #fff !important;
        }
        
     }

 }



`;
export default HomeWrapper;