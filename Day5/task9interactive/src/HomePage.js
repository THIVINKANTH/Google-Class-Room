import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useEffect, useState } from 'react';
import { ListAlltran } from './ListAllTransaction';
export const Home=()=>
{
    // home page navigation
    return(
        <>
        <div>
            <Navbar expand="lg" variant="dark" className="bg-primary">
                <Container>
                    <Navbar.Brand href="/"><AccountBalanceIcon></AccountBalanceIcon>Zealous Bank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="thivin"/>
                    <Navbar.Collapse id="thivin">
                        <Nav className="ms-5">
                            <NavDropdown title="CustomerDetails" id="basic-nav-dropdown">
                                <NavDropdown.Item href="Createaccount"><GroupAddIcon></GroupAddIcon>Create New Account</NavDropdown.Item>
                                <NavDropdown.Item href="/"></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Transaction" id="basic-nav-dropdown" className="ms-5">
                                <NavDropdown.Item href="newtransaction"><CreditScoreIcon></CreditScoreIcon>New Transaction</NavDropdown.Item>
                                <NavDropdown.Item href="Display"><ReceiptLongIcon></ReceiptLongIcon>ListAll Transaction</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                            <button className="btn btn-outline-warning" onClick={()=>
                            {
                                sessionStorage.removeItem("auth")
                                window.location.assign("/")
                            }}><LogoutIcon></LogoutIcon>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
        
    )
}