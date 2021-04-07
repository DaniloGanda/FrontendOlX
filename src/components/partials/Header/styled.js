import styled from 'styled-components';

export const HeaderArea = styled.div`
  background:#FFF;
  height:60px;
  border-bottom: 1px solid #CCC;

.container{
  max-width: 1000px;
  margin:auto;
  display:flex;  
}

a{
    text-decoration:none;
}

.logo{
    flex:1;
    display:flex;
    align-items:center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3{
        font-size: 27px;
        font-weight:bold;
    }

    .logo-1{color:#9e29f5;}
    .logo-2{color:#8509e2;}
    .logo-3{color:#9e29f5;}
}

nav{
    padding-top:10px;
    paddin-bottom: 10px;

    ul,li{
        margin:0;
        padding:0;
        list-style:none;
    }

    ul{
        display:flex;
        align-items:center;
        height:40px;
    }

    li{
        margin-left: 20px;
        margin-right:20px;

        a, button {
            border:0px;
            background:none;
            color:#000;
            font-size:14px;
            cursor:pointer;
            outline:none;

            &:hover {
                color:#999;
            }

            &.button{
                background-color:#9e29f5;
                border-radius: 2px;
                color:#FFF;
                padding: 5px 10px;
            }

            &.button:hover{
                background-color:#8509e2;
            }
        }
    }
}
`;