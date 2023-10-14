import React from 'react'
import { Button } from 'react-bootstrap'
import Menu_data from './Data/MenuData'
import { Link } from 'react-router-dom'


function Menu() {
  return (
    <>
    
    <section className='menu_page'>
  <div className='container text-center py-3  '>
    <h2><span1>DUNKIN</span1><span>’</span> CLASSICS & NEW FAVORITES</h2>
    <p>Our menu is full of great-tasting items that will get you
         going and keep you running<br/> throughout your
         busy day. Plus, they’re always made to order—just the way you like.</p>
  </div>
 <div className='container'>
    <div className='row pb-5'>
    {Menu_data.map((b)=>(
    <div className='col-lg-4 col-sm-12 promoted_item mb-5' key={b.id}>
         <Link to = {'/coffee'}>
        <div className='menu_item shadow'>
          
          <img className='ms-3' src={b.Cover} alt='img'/>
         
        <div className='py-4'>
          <button className='ban3_btn' type='submit'>{b.Name}</button>
          </div>
        </div>
        </Link>

    </div>
    ))}
</div>
  
</div>

</section>

<section className='order_online container'>
        <div className='row'>
            <div className='col-lg-6 ban2nd'>
<h1 className='ban2ndtext'><span1>DUNKIN’</span1> DONE EASY</h1>
<p className='pictext py-3'>Find a store, place your order and get on your way with the Dunkin’ App</p>
<ul className='pictext'>
    <li>Order ahead and pay from your phone</li>
    <li>Join Dunkin’ Rewards and earn points towards free food and beverages</li>
    <li>Earn exclusive offers and rewards</li>
    </ul>
    <div  className=' py-3'>
<Button variant="outline-dark" className='mx-3 bg-dark mb-4'><img src={require('./img/AppStore.png')} className='w-100' alt='img'/></Button>
<Button variant="outline-dark" className=' bg-dark ms-3' ><img src={require('./img/GooglePlayStore.png')} className='w-100' alt='img'/></Button></div>
            </div>
            <div className='col-lg-6'><img src={require('./img/iphone_web.png')} className='w-100' alt='img'/></div>

        </div>
        
    </section>
    
    </>
  )
}

export default Menu