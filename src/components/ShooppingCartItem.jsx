import React from 'react';
import '../styles/ShoopingCartItem.scss';

const ShoopingCartItem = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className="product-info">
                <p>Bike</p>
                <p>$30,00</p>
            </div>
        </aside>
    );
};

export default ShoopingCartItem;