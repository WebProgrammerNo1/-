import styled from "styled-components";

const AllProductShowWrapper = styled.div`

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

         .IconButtonBlock{
             top: 95px;
             left: 180px;
             position: absolute;
            .IconButtonbuy{
                background-size: 25px;
                width: 45px;
                height: 45px;
                margin-left: 7px;
                left: -170px;
                top: 30px;
                
            }
            .IconButtonlike{
                background-size: 25px;
                width: 45px;
                height: 45px;
                left: -166px;
            }
         }
         
     }
}

`;
export default AllProductShowWrapper;