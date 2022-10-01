import styled from "styled-components";

const CantactWrapper = styled.div`

.cotact{
    position: relative;
    width: 45%;
    background: #72BF44;   
    ul{
        padding: 30px 50px !important;
        li{
            color: #fff !important; 
            h2{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
            }
            span{
                margin: 13px 0 !important;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #fff !important; 
                display: block;
            }
        }
    }
    .contactimg{
        position: absolute;
        top: 100px;
        right: 0;
        width: 167px;
       
    }
}

`;
export default CantactWrapper;