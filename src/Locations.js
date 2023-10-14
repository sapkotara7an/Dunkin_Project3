import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Locations() {
  return (
    <>
    
    <div className='container-fluid py-2 location'>
      <div className='row'>
        <div className='col-lg-6 location_detail'>
    <div className=' text-center py-2' ><h2>FIND YOUR <span1>DUNKIN<span>'</span></span1></h2>
    <h4 className='py-3'>Get directions and details on the Dunkin’® nearest to you!</h4>

    </div>
    <div className='text-center pt-3 pb-2'>
    <form >
  <input type="text" name="search" placeholder="Enter your Location.."/>
</form></div>
<div className='pb-5 text-center'>
  <button className='header_btn' type='submit'>Find<i className="fa-solid fa-magnifying-glass-location px-2"></i></button></div>
<div className='text-center try_again'>
<h3>LET’S TRY AGAIN</h3>
<p>We were unable to find a Dunkin'® within your radius. Enter another location to find a restaurant nearby.</p>

</div>

</div>





<div className='col-lg-6'><img src={require('./img/map_web.png')} width='100%'/></div>



</div>
</div>



  
    </>
  )
}

export default Locations