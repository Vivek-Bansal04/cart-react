import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
          //bind unless value of this will be lost
    }
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return( 
                    <CartItem 
                      product={product} 
                      key={product.id}
                    /> 
                    )
                    //passing product as prop
                })}
                         
            </div>        
        );
    }
}

export default Cart;