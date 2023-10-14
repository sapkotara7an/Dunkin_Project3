import React from 'react'
import { Button } from 'react-bootstrap'


function Banner() {
  return (
    <>
    <div className='navnotice text-center'>
        <p>Come run with us! Apply to join our exceptional team here.</p>
      </div>
    <div>
        <div className=' py-2 creative_img'>
           
            <div className='text-centre bantext '><span1>DUNKIN’</span1> <span>REWARDS </span>
                           <div>A NEW<br/></div>  WAY TO RUN</div>

            

        </div>
    </div>

    <div className='container-fluid py-5 ba'>

        <div className='row bannerpic'>

            <div className='col-lg-3 col-md-12 col-sm-12 pic'>
            <img src={require('../src/img/Rewards.png')} width='200px'/>
            <h4 className='text-center itemtext pb-3 '>EARN POINTS ANY WAY YOU PAY</h4>
            <p className='pictext'>Order ahead in the app or scan your Dunkin’ Rewards ID in-store to earn 10 points per $1 spent</p>
            </div>

            <div className='col-lg-3 col-md-12 col-sm-12  pic'><img src={require('../src/img/Boosted.png')} width='200px'/>
            <h4 className='text-center itemtext'>UNLOCK BOOSTED STATUS</h4>
            <p className='pictext' >Rewards start at just 150 points – only $15 spent!</p>
            </div>

            <div className='col-lg-3 col-md-12 col-sm-12 pic'><img src={require('../src/img/Turn_points_rewards.png')} width='200px'/>
            <h4 className='text-center itemtext'>TURN POINTS INTO REWARDS</h4>
            <p className='pictext'>12 visits in a calendar month earns 12 points per dollar!</p>
            </div>
            
            <div className=' me-auto flex ba_btn'>
        <div className='py-4 mx-4'><button className='ban3_btn' type='submit'>Sign Up</button></div>
        <div className='py-4'><button className='ban3_btn' type='submit'>Learn More</button></div>
        </div>
        </div>
       
    </div>


    
        <div className='row'>
            <div className='col-lg-6 ban2nd'>
<h1 className='ban2ndtext'><span1>DUNKIN’</span1> DONE EASY</h1>
<p className='pictext py-3'>Find a store, place your order and get on your way with the Dunkin’ App</p>
<ul className='pictext'>
    <li>Order ahead and pay from your phone</li>
    <li>Join Dunkin’ Rewards and earn points towards free food and beverages</li>
    <li>Earn exclusive offers and rewards</li>
    </ul>
    <div  className=' py-3'style={{justifyContent:'center', margin:'auto'}}>
<Button variant="outline-dark" className='me-3 my-3 bg-dark'><img src={require('../src/img/AppStore.png')} className='w-100'/></Button>
<Button variant="outline-dark" className=' bg-dark' ><img src={require('../src/img/GooglePlayStore.png')} className='w-100'/></Button></div>
            </div>
            <div className='col-lg-6'><img src={require('../src/img/iphone_web.png')} className='w-100' alt='img'/></div>

        </div>
        
    

        <div className='container-fluid banner2'>
  <div className='row text-center'>
  <div className='col-lg-6 col-md-12 col-sm-12'>
      <img src={require('../src/img/Dunkin_Run_desktop.png')} />
    </div>
    <div className='col-lg-6 col-md-12 col-sm-12'>
      <h1 className='ban2ndtext pt-5 px-5'>MAKE IT A <span1>DUNKIN’ RUN</span1></h1>
      <h4 className=' pt-4 '>Get a $1 donut with any medium or larger coffee</h4>
      <div className='py-4'><button className='ban3_btn' type='submit'>VIEW MORE</button></div>
      <p className='pictext'>Excludes specialty donuts and fancies. Offer valid on medium or larger coffee. Price 
        and participation may vary. Limited time offer. Terms apply.
      </p>
    </div>
   
  </div>
</div>


    <div className=' ban3 container-fluid text-center'>
      <div className='row '>
        <div className='col-lg-4  col-md-12 col-sm-12 py-5 ban3_img'>
          <p className='pictext_ban3'>Sipping is Believing</p>
          <h2 className='subtitle'>
          HAND CRAFTED ESPRESSO DRINKS</h2>
            <img src={require('../src/img/Expresso.jpg')}/>
            </div>

        <div className='col-lg-4 col-md-12 col-sm-12 py-5 ban3_img'> <p className='pictext_ban3'>Freshly Made</p>
          <h2 className='subtitle'>
          ALL-DAY BREAKFAST SANDWICHES</h2>
        <img src={require('../src/img/Bacon_Egg.png')} /></div>

        <div className='col-lg-4 col-md-12 col-sm-12 py-5 ban3_img'> <p className='pictext_ban3'>Dunkin’ Classic</p>
          <h2 className='subtitle'>
          HOT COFFEE</h2>
        <img src={require('../src/img/coffee.jpg')} /></div>
      </div>
    </div>

<div className=''>
  <div className='row'>
  <div className='ban3_content text-center col-lg-7 col-md-12 col-sm-12'><h2>GIVE THE GIFT OF GO</h2>
<p className='mb-5'>You got the go. We got the keep going. Send a friend a boost on you!</p>
<div ><button className='ban3_btn mt-3' type='submit'>Send An E-Gift Card</button></div>
</div>
  <div className='dunkinImg col-lg-5 col-md-12 col-sm-12'><img src={require('../src/img/hooray_card.png')} height='420px' alt='img'/>
  </div>
  </div>


 
</div>


<div className='container-fluid'>
  <div className='row'>
    <div className='col-lg-7'><img src={require('../src/img/map_web.png')} className='w-100' /></div>
    <div className='col-lg-5'>
    <div className='text-center ban4_content '><h2>COME VISIT</h2>
<p className='my-3'>Find a Dunkin' Near You</p>
<div className='py-4'><button className='ban3_btn' type='submit'>VIEW LOCATIONS</button></div>
</div>

    </div>
  </div>
</div>



    </>
  )
}

export default Banner