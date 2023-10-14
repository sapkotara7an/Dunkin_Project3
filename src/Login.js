import { NavLink } from "react-router-dom"
import { Button, Card, Form } from "react-bootstrap"





const LoginPage = () => {
  
  
    return (<>

        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-5">

                    <Card
                        style={{background:'#EF6A00'}}
                        key={'dark'}
                        text={'white'}
                        className="mb-2 shadow-lg border-0 rounded-lg mt-5"
                    >
                        <Card.Header>
                            <h3 className="text-center font-weight-mute my-4">Sign-In</h3>
                        </Card.Header>

                        <Card.Body>
                            <Form className="text-black">
                                <Form.FloatingLabel
                                    controlId="email"
                                    label="Username"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        
                                        type="email" 
                                        name="email"
                                        placeholder="name@example.com"
                                        size="sm"
                                        
                                    />
                                    
                                </Form.FloatingLabel>
                                <span className="text-danger">
                                  
                                </span>

                                <Form.FloatingLabel
                                    controlId="password"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                       
                                        size="sm"
                                        required
                                    />
                                </Form.FloatingLabel>
                                <span className="text-danger"></span>

                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <NavLink className={"text-white"} to="">
                                        Forgot Password
                                    </NavLink>
                                    Or 
                                    <NavLink className={"text-white"} to="/register">
                                        Sign Up
                                    </NavLink>
                                    <Button size="sm" variant="success" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    </>)
}

export default LoginPage