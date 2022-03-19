import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <OrderItem />
                    <div className="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;