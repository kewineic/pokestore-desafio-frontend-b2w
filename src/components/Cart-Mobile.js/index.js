import React from 'react';
import { usePurchased } from '../../context/Purchased';
import cartIcon from '../../assets/cart-icon.png';
import './style.css';

const CartMobile = (props) => {

    const { purchased } = usePurchased(0);
    const { priceTotal } = usePurchased(0);

    const colorThemeCartMobile = props.colorThemeCartMobile;

    return (
        <div className="cartMobile-default">
            <div className="cartMobile-container">
                <p>Quantidade: {purchased.length}</p>
                <p>Valor Total: ${priceTotal} </p>
                <label htmlFor="hidden-cart" style={{ background: colorThemeCartMobile }}>
                    <img alt="CartMobile Icon" src={cartIcon} />Detalhes
                </label>
            </div>
        </div>
    );
};

export default CartMobile;