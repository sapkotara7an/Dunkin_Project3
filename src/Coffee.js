import React, { useEffect } from 'react'
import Coffee_data from './Data/Menu_coffee';
import { Link } from 'react-router-dom';

const CoffeeDisplay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
    return(
        <>

<section className='menu_page'>
  <div className='container text-center py-3  '>
    <h2><span1>DUNKIN</span1><span>’</span> Food Selections</h2>
    <p>Our menu is full of great-tasting items that will get you
         going and keep you running<br/> throughout your
         busy day. Plus, they’re always made to order—just the way you like.</p>
  </div>
 <div className='container my-5'>
    <div className='row pb-5'>
    {Coffee_data.map((b)=>(
    <div className='col-lg-4 col-sm-12 promoted_item 'style={{marginBottom:'100px'}} key={b.id}>
         <Link to = ''>
        <div className='menu_item shadow text-center '>
          
          <img src={b.imgSrc} alt='img' className='mb-2'/>
          <h3 style={{color:'#EF6B02'}}>{b.name}</h3>
          <h4 className=' text-danger pt-1'>{b.price}</h4>
         
        <div className='py-2'>
          <button className='ban3_btn' type='submit'>Order now</button>
          </div>
        </div>
        </Link>

    </div>
    ))}
</div>
  
</div>

</section>

        </>
    )
}

export default CoffeeDisplay;