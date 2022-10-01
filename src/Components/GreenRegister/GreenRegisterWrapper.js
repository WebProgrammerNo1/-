import styled from "styled-components";
 const GreenRegisterWrapper = styled.div`
 .GreenRegister{
    height: 225px;
    background: #72BF44;
    border-radius: 8px;
    margin: 100px 0 90px;
    display: flex;
    align-items: center;
    padding-left: 120px;
    position: relative;
    .GreenRegisterTitle{
        font-family: 'Open Sans';
        font-style: normal;
        width: 722px;
        h2{
            color: #FFFFFF;
            font-weight: 700;
            font-size: 36px;
            line-height: 65px;
        }
        span{
            font-weight: 400;
            font-size: 20px;
            line-height: 33px;
            color: #fff;
        }

    }
    .GreenRegisterBlock{
        margin-left: 33px;
        z-index: 12;
        input{
            height: 55px;
            width: 450px;
            border-radius: 8px;
            background: #FFFFFF;
            border: none;
            outline: none;
            padding: 18px 0 18px 24px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
        }

        Button{
            background-color: #383838;
            border-radius: 8px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #FFFFFF;
            padding: 17px 38px;
            margin-left: 24px;
            img{
                padding-right: 10px;
                width: 30px;
                height: 23px;
            }
        }
        span{
            display: inline-block;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 18px;
            color: #FFFFFF;
        }

    }

    .imgblock{
        .message{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100px;
        }
        .message2{
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 100px;
        }
        .line{
            position: absolute;
            left: 150px;
            top: 85px;
            width: 1200px;
        }
    }

 }


 `;
 export default GreenRegisterWrapper;