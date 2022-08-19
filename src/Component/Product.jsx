import React from 'react';
import DATA from './Data';
import { Link } from 'react-router-dom';


export const Product = () => {
  const cardItem = (DATA) => {
    return (
        <div class="card my-5 py-4" key={DATA.id} style={{width: "18rem"}}>
            <img src={DATA.img} class="card-img-top" alt={DATA.title}/>
                <div class="card-body text-center">
                    <h5 class="card-title">{DATA.title}</h5>
                    <p className="lead">${DATA.price}</p>
                    <Link to={`/products/${DATA.id}`} class="btn btn-outline-primary">Buy Now</Link>
                    {/* {`/products/${item.id}`}  */}
                </div>
</div>
            );
}
  return (
    <>
    <div className='container my-2 py-2'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Product</h1>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row justify-content-around'>
        {DATA.map(cardItem)}
      </div>
    </div>
    {/* <About/> */}
    </>
  )
}
