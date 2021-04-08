import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
          //bind unless value of this will be lost
    }
    //arrow function automatically bind this to instance of class so no need of separately writing bind
    increaseQuantity = () => {
        //console.log('this', this.state);
        //setstate form 1
        //when previous state is not required
        /*this.setState({
            qty: this.state.qty + 1
        });*/
        //setState form 2
        //when previous state is required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        const{qty} = this.state;
        if(qty===0)
        {
            return;
        }
        this.setState((prevState) => {
            return {
                qty:prevState.qty - 1
            }
        });
    }
    
    render () {
        //object destructuring we are getting qty by normal js and others by different method
        const {price,title} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty:{this.state.qty}</div>
                    <div className="cart-item-actions">
                       {/* Buttons */}
                       <img alt="increase" className="action-icons"
                        src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        onClick={this.increaseQuantity}
                      
                        />
                       <img alt="decrease" className="action-icons"
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={this.decreaseQuantity}
                        />
                       <img alt="delete" className="action-icons" 
                       src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" />
                    </div>
                </div>
            </div>
        );
    }
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