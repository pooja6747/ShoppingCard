import { Carousel } from 'bootstrap'
import React from 'react';
import { Button,Modal } from 'bootstrap';
import { Product } from './Product';


export const Home = () => {
 
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/shoe4.png" class="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
    <div class="carousel-item">
      <img src="./images/shoe7.png" class="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
    <div class="carousel-item">
      <img src="./images/shoe6.jpg" class="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Product/>
    </>
  )
}
