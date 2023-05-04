import React, { useContext } from 'react';
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)



    const handleLogOut = () => {
        LogOut().then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <>
                    <LinkContainer to="/">
                        <Nav.Link> <h2>Food Valley</h2>  </Nav.Link>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className="mx-auto w-full ">

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>


                           

                        </Nav>
                        <Nav  className='justify-content-end  gap-2 '>
                        {user ? <>
                               
                                <Card.Img  variant="top" style={{ width: '5%' }} className={`rounded-circle  justify-content-center ml-2`} title={user.displayName} src={user.photoURL} />
                                <Button onClick={handleLogOut} variant="info">Logout</Button>
                            </> 
                            :

                                <Link to='/login'><Button variant="info">Login</Button></Link>
                            }

                        </Nav>
                       
                    </Navbar.Collapse>
                </>
            </Navbar>

            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <LinkContainer to="/" className='text-bold '>
                        <Nav.Link ><h3>Food Valley</h3></Nav.Link>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav className='justify-item-center'>

                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog">
                                    <Nav.Link>Blog</Nav.Link>
                                </LinkContainer>




                            </Nav>
                            <Nav className='justify-content-end  gap-2 '>
                                {user ? <>

                                    <Card.Img  variant="top" style={{ width: '5%' }} className={`rounded-circle  justify-content-center ml-2`} title={user.displayName} src={user.photoURL} />
                                    <Button onClick={handleLogOut} variant="info">Logout</Button>
                                </>
                                    :

                                    <Link to='/login'><Button variant="info">Login</Button></Link>
                                }

                            </Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;