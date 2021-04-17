import React from 'react';
import {Item} from './styled';
import {Link} from 'react-router-dom';

export default (props) => {

    function Cash(val){
        return val.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    };

    let price = '';

    if(props.data.priceNegotiable == true){
        price = 'Preço negociável';
    }else{
        price = Cash(props.data.price);
    }

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""/>
                </div>
                <div className="itemTitle">
                    {props.data.title}
                </div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
}