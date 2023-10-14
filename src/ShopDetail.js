import { useParams } from "react-router-dom";
import ShopIems from "./Data/Shop_data";
import { Col, Container, Row } from "react-bootstrap";


const Product = ({}) => {

    let {sid} = useParams()
    let data = ShopIems.find((a) => a.id==sid)
    return (
        <>
        <Container>
            <Row className="text-center shadow my-5 p-2">
                <Col lg={5}>
                 <div><img src={data.imgSrc} alt="img"/></div> 
                 <h3>{data.title}</h3>  
                <h5 className="text-danger py-2">{data.price}</h5>
                <div className='py-4'>
          <button className='ban3_btn' type='submit'>Add to Cart</button>
          </div>
                </Col>
                <Col lg={5}>
                    <h2 className="pb-2">Ingredients</h2>
                    <p>{data.ingredients}</p></Col>
            </Row>
        </Container>
        </>
    )
}

export default Product;