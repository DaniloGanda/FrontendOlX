import styled from 'styled-components';

export const PageArea = styled.div`

    form{
        background: #FFF;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;

        .area{
            display:flex;
            align-items:center;
            padding:10px;
            max-width:500px;

            .area--title{
                width:200px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;

            }

            .area--input{
                flex:1;

                input[type=email], input[type=password]{
                    width:100%;
                    font-size:14px;
                    padding:5px;
                    border:1px solid #CCC;
                    border-radius:3px;
                    outline:0;
                    transition:all ease .4s;

                    &:focus{
                        border:1px solid #969494;
                        color: #333;
                    }
                }

                input[type=checkbox]{
                    font-size:14px;
                    padding:5px;
                    border:1px solid #DDD;
                    border-radius:3px;
                    outline:0;
                }
            }

            button{
                background: #9e29f5;
                border:0;
                outline:0;
                padding:5px 10px;
                border-radius: 4px;
                color: #FFF;
                font-size: 15px;
                cursor:pointer;

                &:hover{
                    background: #8509e2;
                }
            }
        }
    }
`;