import styled from "styled-components";
 const Footerwrapper = styled.div`
    a{
        text-decoration:none !important;
    }
 .footerBlock{
     margin-top: 60px;
     display: flex;
     }
     .footercantact{
        li{
            padding-top: 15px !important;
            cursor: pointer;
        }
     }
     
     .socialMedia{
        display: flex;
        margin: 25px  -15px 0 -15px !important;

        li{
            margin: 0 15px !important;
        }
    }
    li{
        a{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 38px;
            color: #383838;
        }
    }

 `;
 export default Footerwrapper