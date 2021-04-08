import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0px;

    .searchBox{
        background-color: #9e29f5;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 0.3px rgb(0 0 0 / 35%);
        display:flex;

        form{
            flex:1;
            display:flex;

            input,select{
                height:40px;
                border:0px;
                border-radius:5px;
                outline:0px;
                font-size:15px;
                color:#000;
                margin-right:20px;
            }

            input{
                flex:1;
                padding:0px 10px
            }

            select{
                width:100px;
            }

            button{
                background-color: #A577B8;
                font-size: 15px;
                border:0;
                border-radius:5px;
                color:#FFF;
                height: 40px;
                padding: 0 20px;
                cursor:pointer;

                &:hover{
                    background-color: #B691B0;
                }
            }
        }
    }

    .categoryList{
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;

        .categoryItem{
            width:25%;
            display:flex;
            align-items:center;
            color:#000;
            text-decoration:none;
            height:50px;
            margin-bottom:10px;

            &:hover{
                color:#999;
            }

            img{
                width:45px;
                height:45px;
                margin-right:10px;
            }
        }
    }
`;

export const PageArea = styled.div`
`;