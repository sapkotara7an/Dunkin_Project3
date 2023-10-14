import { Link } from "react-router-dom";
import ShopIems from "./Data/Shop_data";


const ShopItem = () => {
    return (
        <>
         <div className='container my-5'>
    <div className='row pb-5'>
    {ShopIems.map((b)=>(
    <div className='col-lg-4 col-sm-12 promoted_item mb-5' key={b.id}>
         <Link to = {`/shop_detail/${b.id}`}>
        <div className='menu_item shadow'>
          
          <img className='ms-3' src={b.imgSrc} alt='img' height='100px'/>
         
        <div className='py-4'>
          <button className='ban3_btn' type='submit'>{b.title}</button>
          </div>
        </div>
        </Link>

    </div>
    ))}
</div>
  
</div>
        </>
    )
}
export default ShopItem;