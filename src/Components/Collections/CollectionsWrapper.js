import styled from "styled-components";


const CollectionsWrapper = styled.div`

    .CollectionsTitle{
        h2{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 65px;
            color: #383838;
            margin-bottom: 50px !important;
        }
    }
    .CollectionsBlock{
        position: relative;
        .productInform{
            cursor: pointer;
            .plusBlock{
                width: 30px;
                height: 30px;
                color: #000;
                position: absolute;
                border-radius: 50%;
                top: 300px;
                left: 570px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .burchak{
                position: absolute;
                top: 301px;
                left: 603px;
            }

            .producutInfoTitle{
                position: absolute;
                width: 181px;
                height: 70px;
                left: 618px;
                top: 283px;
                background: #FFFFFF;
                border-radius: 10px;
                color: #383838;
                font-family: 'Open Sans';
                font-style: normal;
                padding: 12px;
                h2{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                }
                span{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                }
            }
        }

        .productInform:nth-child(2){
            .plusBlock{
                position: absolute;
                top: 310px;
                left: 290px;
            }

            .burchak{
                position: absolute;
                top: 310px;
                left: 323px;
            }

            .producutInfoTitle{
                position: absolute;
                left: 338px;
                top: 288px;
            }
        }

        .productInform:nth-child(3){
            .plusBlock{
                position: absolute;
                top: 375px;
                left: 336px;
            }

            .burchak{
                position: absolute;
                left: 370px;
                top: 375px;
            }

            .producutInfoTitle{
                position: absolute;
                left: 385px;
                top: 357px;
            }
        }

        .productInform:nth-child(4){
            .plusBlock{
                position: absolute;
                top: 250px;
                left: 790px;
            }

            .burchak{
                position: absolute;
                left: 823px;
                top: 250px;
            }

            .producutInfoTitle{
                position: absolute;
                left: 838px;
                top: 229px;
            }
        }

        .productInform:nth-child(5){
            .plusBlock{
                position: absolute;
                top: 280px;
                left: 935px;
            }

                .burchak{
                position: absolute;
                left: 968px;
                top: 280px;
            }

            .producutInfoTitle{
                position: absolute;
                left: 983px;
                top: 260px;
            }
        }

        .dblock {
            display: block !important;
            transition: all 0.15s ease 0s;
        }

        .dnone{
            display: none;
        }

        
    }

`;
export default CollectionsWrapper