import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {cart} = props;
    let total = [];
    let nameArr = []; 
    let uNameArr = [];
    for (const member of cart){
        nameArr.push(member.name);
        if(!uNameArr.includes(member.name)) uNameArr.push(member.name) && total.push(member.salary)
    }
    const totalAmount = total.reduce((previous, current)=> previous + current,0)
    // console.log(nameArr);
    return (
        <div className= "cart border rounded">
             <h2> <strong> Your Team </strong> </h2>
             <h4>People in your Team: {uNameArr.length}  </h4>
             <h4>Total salary : {totalAmount} </h4>
             <h4>Team member name</h4>
             { uNameArr.map(name =><p>{name}</p>)} 
        </div>
    );
};

export default Cart;