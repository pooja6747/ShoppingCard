import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from './Data';
import { useDispatch } from 'react-redux';
import { addItem,delItem } from '../Redux/Action/Index';

export const Productdetails = () => {
  const[cartbtn,setCartbtn]=useState("Add to cart");
  //now need to product id pass from th product page
  const proid=useParams();
  const proDetail=DATA.filter(item=>item.id == proid.id);
  const product=proDetail[0];
  console.log(product);
//btn click
const dispatch = useDispatch();
const handleCart=(product)=>{
  if(cartbtn === "Add to cart"){
    dispatch(addItem(product))
    setCartbtn("Remove from cart")
  }else{
    dispatch(delItem(product))
    setCartbtn("Add to cart")
  }
}
  return (
    <>

   <div className='container'>
     <div className='row'>
       <div className='col-md-6 d-flex justify-content-center mx-auto'>
         <img src={product.img} alt={product.title} style={{height:'500px',width:"200px"}}/>
       </div>

       <div className='col-md-6 d-flex flex-column justify-content-center'>
         <h1 className='fw-bold'>{product.title}</h1>
         <hr/>
         <h2>${product.price}</h2>
         <p>{product.desc}</p>
         <button className='btn btn-outline-primary' onClick={()=>handleCart(product)}>{cartbtn}</button>
       </div>
     </div>
   </div>
    </>
  )
}
