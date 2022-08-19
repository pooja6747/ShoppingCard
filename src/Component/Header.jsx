import React from 'react';
import { Link } from 'react-router-dom';
import { Cartbtn } from '../Buttons/Cartbtn';
import { Login } from '../Buttons/Login';
import { SignUp } from '../Buttons/SignUp';

export const Header = () => {
  return (
    <>
      <div className='conatiner-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
            <span className="navbar-toggler-icon"></span>
          </button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">

<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <Link className="nav-link" to="/">Home </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/products">Product</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul>

</div>
 

       
          <Link className="navbar-brand mx-auto fw-bold" to="/">Shoe MART</Link>
          <Login/>
          <SignUp/>
          <Cartbtn/>
        </nav>
      </div>


    </>
  )
}
