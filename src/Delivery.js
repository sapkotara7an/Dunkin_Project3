import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Delivery() {
  return (
    <>
    
    <section className='delivery'>
<div className='container  delivery_img pb-5'>
  <div className='row'>
  <div className=' col-lg-5 col-sm-12 pt-5 mx-3 mb-4'>
            <img src='https://www.dunkindonuts.com/content/dam/dd/img/rebranding/delivery/DunkinDelivers_Desktop.svg' />
            </div>
        <div className=' col-lg-5 col-sm-12'>
            <img src='https://www.dunkindonuts.com/content/dam/dd/img/rebranding/delivery/DeliveryImage_Desktop.png'/>
            <h2 className='text-center delivery_text py-2'>LET US COME TO YOU!</h2>
        </div>
  </div>
    
       
    
</div>

<div className='text-center  py-3'><h3>Enter your location to find who delivers Dunkin’ in your area</h3></div>

<div className='flex text-center container pb-4 delivery_info pt-3'>
<div className='delivery_search'>
  <div><input type="text" name="" placeholder="Enter Address To Search.."/></div>
  <div className='pt-2' > <button className='header_btn' type='submit'>SEARCH</button></div>
<div><p className='text-danger'>
*Sorry, we're not able to find a Dunkin' Delivery partner<br/> within your radius. Please try another location.</p></div>
</div>

</div>







    </section>
    
    </>
  )
}

export default Delivery