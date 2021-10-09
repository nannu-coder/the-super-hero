import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../teamMember/Member';
import './Team.css';
const Team = () => {
    const [ members, setMembers] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('./member.json')
        .then(res => res.json())
        .then(data => setMembers(data));

    //     fetch(url)
    // .then(response=> response.body.json())
    // .then(myJson=> console.log(myJson))
    },[])
const handleAddToCart = (member) => {
    // console.log("member");
    const newCart = [...cart,member];
    setCart (newCart);
}

    return (
        <div className=" t_header ">
            {/* <h3>
            Available member for the Club project
            </h3> */}
            
            <div className="team_container row row-cols-1 row-cols-md-3 g-1 ms-2 ">
        
            {
                members.map(member => <Member 
                key={member.id}
                member={member}
                handleAddToCart = {handleAddToCart}

                >

                </Member>)
            }

            </div>
         <div className="cart_container ">
             <Cart cart={cart}></Cart>
         </div>

        </div>
    );
};

export default Team;