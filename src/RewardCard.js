import { Col, Container, Row } from "react-bootstrap";



const RewardCard = () => {
    return(
        <>
        <Container>
            <Row className="text-center">
                <Col lg={3} md={12} sm={12} className="border shadow p-3 m-5 cursor-pointer">
                    <h2 className="py-3"  style={{color:'#EF6A00'}}>GET A DUNKIN' CARD</h2>
                    <p>Mail a Dunkin card, send and e-gift instantly or purchase $500 or more in bulk</p>
                </Col>
                <Col lg={3} md={12} sm={12}className="border shadow p-3 m-5">
                    <h2 className="py-3"  style={{color:'#EF6A00'}}>MANAGE DUNKIN' CARD</h2>
                    <p>Mail a Dunkin card, send and e-gift instantly or purchase $500 or more in bulk</p>
                </Col>
                <Col lg={3} md={12} sm={12}className="border shadow p-3 m-5">
                    <h2 className="py-3" style={{color:'#EF6A00'}}>CHECK BALANCE OF ADD VALUE</h2>
                    <p>Mail a Dunkin card, send and e-gift instantly or purchase $500 or more in bulk</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default RewardCard;