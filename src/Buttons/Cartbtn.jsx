import React from 'react'
import { Link } from 'react-router-dom'
import { addItem } from '../Redux/Action/Index';
import { useSelector } from 'react-redux';
export const Cartbtn = () => {
  const state= useSelector((state)=> state.addItem)
  return (
    <>
  {/* <div className='btn btn-outline-primary'>Cart ()</div> */}

        <Link to="/" className='btn btn-outline-primary ms-2'>
            <span className='fa fa-shopping-cart me-1'></span>Cart ({state.length})
        </Link>
    </>
  )
}
