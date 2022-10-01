import styled from "styled-components";


const UserModalWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
background: rgba(0, 0, 0, 0.6);
transform: translate(-50%, -50%);
width: 100%;
z-index: 20;

.Modal{
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    .ModalContainer{
        position: relative;
        width: 439px;
        height: 490px;
        background: #FFFFFF;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: #fff;
        padding:  35px;
        overflow: hidden;
        .closeBtn{
            margin-bottom: 40px;
            position: absolute;
            top: 8px;
            right: -8px;
            color: #323232;
            &:hover,
            &:focus,
            &:hover{
                background-color: #fff;
            }
        }

        .title{
            margin-top: 10px;
            span{
                &:hover{
                    color: #72Bf44;
                }

            }
        }

        
      }
    }
    
    
.UserinputBlock{
      input{
          height: 50px;
          margin-top: 30px;
          border-radius: 6px;
          padding: 0 14px;
          font-size: 16px;
          border:1.5px solid #BDBDBD;
          &:hover,
          &:focus,
          &:hover{
              border-color: #72Bf44;
          }
      }
}
.closeBtn{
  position: absolute;
  top: 5px;
  right: -15px;
  color: #323232;
  &:hover,
  &:focus,
  &:hover{
      background-color: #fff;
  }
}

.title{
  span{
   cursor: pointer;
   Button{
    text-transform: capitalize;
    color: #323232;
    &:hover,
    &:focus,
    &:hover{
      background-color: #fff;
    }
   }
  }
}

.footerbtn{
  margin-top: 20px;
  Button{
    border-radius:6px;
    padding: 10px;
    width: 300px;
    text-transform: capitalize;
    background-color: #BDBDBD;
    color: #1976d2;
  }
}

.card-back{

  .footerbtn{
    margin-top: 10px;
  }

  .UserinputBlock{
    input{
      margin-top: 25px;
    }
  }

}

.full-height{
  min-height: 100vh;
}
.card-3d-wrap {
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  width: 439px;
  height: 490px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;    
  top: 0;
  left: 0;  
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out; 
}
.card-front, .card-back {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #FFFFFF;
  position: absolute;
  border-radius: 8px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.active, ~ .card-3d-wrap .card-3d-wrapper  {
  transform: rotateY(180deg);
  .title{
    span{
      /* color: #72Bf44; */
    }
  }

}



.center-wrap{
  padding: 35px;
}

`;

export default UserModalWrapper