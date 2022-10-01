import styled from "styled-components";

const NewspromotionsWrapper = styled.div `
margin: 100px 0;
color: #383838;

.News_promotionBlock{
    h2{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        margin-bottom: 40px !important;
    }

    .Collection{
        display: flex;
        .blocks{
            width: 920px;
            height: 376px;
            background: #F7F7F7;
            border-radius: 8px;
            padding: 30px 0 0 40px;
            display: flex;
            span{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 25px;
                text-transform: uppercase;
                opacity: 0.7;
            }
            h1{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
                line-height: 65px;
                margin: 20px 0 40px !important;
                width: 360px;
            }
        }
        .Collectionfrist{
            margin-right: 40px;
        }
        
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
export default NewspromotionsWrapper

