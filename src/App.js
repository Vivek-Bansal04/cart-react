
import './App.css';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 3
            }
        ]
    }
}
   // this.increaseQuantity = this.increaseQuantity.bind(this);
      //bind unless value of this will be lost
    handleIncreaseQuantity = (product) => {
        console.log('Hey please inc the qty of', product);
        const { products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            //products:products
            products
        })
    }  

    handleDecreaseQuantity = (product) =>{
        console.log('please decrease the qty of',product);
        const{products}=this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item)=> item.id!==id);

        this.setState({
            products:items
        })
    }
    getCartCount = () => {
      const {products} = this.state;
      let count=0;
      products.forEach((product) => {
        count+=product.qty;
      })
      return count;
    }
    getCartTotal = () => {
      const {products} = this.state;
      let cartTotal = 0;
      products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price
      })
      return cartTotal;
    }
  render (){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20,textAlign: 'left'}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
