import React from 'react'
import { Link } from 'react-router-dom'


function Dunkinrewards() {
  return (
    <>
    
    <div className='text-center dunkinrewards '>
        <div ><img src={require('../src/img/DunkinRewards.png')} alt='img'/></div>
        <p>Runnin' has its rewards. Join <span1>DUNKIN’</span1> <span>REWARDS</span> to earn your choice of free food<br/> and drinks, unlock Boosted 
            Status to earn points faster and score members-only exclusive offers.</p>
            <div className=' me-auto flex ba_btn py-4' >
            
            <Link to='/signup'>
        <div className='py-4 mx-4'>
          <button className='ban3_btn' type='submit' >Sign Up</button>
          </div></Link>

        <div className='py-4'>
          <button className='ban3_btn' type='submit'>Learn More</button>
        </div>
        
        </div>
    </div>
    
    
    </>
  )
}

export default Dunkinrewards