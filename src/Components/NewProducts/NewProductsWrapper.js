import styled from "styled-components";

const NewProductsWrapper = styled.div`

 margin: 40px 0 80px 0;

.productBlock{
    width: 378px !important;
    height: 378px !important;
    background: #F5F5F5;
    border-radius: 8px;
    position: relative;
    .productImg{
        position: absolute;
    }
    
    
}
.productTitle{
    color: #383838;
    padding-top: 25px;
    h2{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
    }
    span{
        display: inline-block;
        margin-top: 7px;
    }
    span:nth-child(3){
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-decoration-line: line-through;
        color: #E0E0E0;
        margin-left:10px !important;
    }
}
.xitTitle{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #383838;
    padding-left: 20px !important;
    margin-bottom: 50px !important;
}

`;
export default NewProductsWrapper;