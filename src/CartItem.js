import React from 'react';

const CartItem = (props) => {
    
    //arrow function automatically bind this to instance of class so no need of separately writing bind    
   
        //object destructuring we are getting qty by normal js and others by different method
    const {price,title,qty} = props.product;
    const {product, onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons"
                    src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                    onClick={() => onIncreaseQuantity(product)}
                    />
                    <img alt="decrease" className="action-icons"
                    src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                    onClick={() => onDecreaseQuantity(product)}
                    />
                    <img alt="delete" className="action-icons" 
                    src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                    onClick={() => onDeleteProduct(product.id)} 
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;