import styled from "styled-components";
 const LikeListWrapper = styled.div`
 
margin-top: 40px;

.LikeLisTitle{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 65px;
    color: #383838;
    padding-left: 20px !important;
    margin-bottom: 20px !important;
}

.LikeLisproductBlock{
    width: 285px !important;
    background: #F5F5F5;
    border-radius: 8px;
    .productImg{
        img{
            width: -webkit-fill-available;
        }
    }
    
    
}
.LikeListproductTitle{
    color: #383838;
    padding: 10px 0 0 10px !important;
    h2{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
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
        font-size: 15px;
        line-height: 25px;
        text-decoration-line: line-through;
        color: #E0E0E0;
        margin-left:10px !important;
    }
}


 `;

 export default LikeListWrapper;