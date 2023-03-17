import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Pagedesign.css'
import { Login } from './Loginpage'
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
export const LandingPage=()=>
{
    const[goin,setGoin]=useState(false)
    // Landing page
    return(
        <>
        {(goin)?
        <>
        <Login/>
        </>
        :
        <>
        <div class="row justify-content-center mt-5 col-lg-12 col-md-10 col-sm-12">
        <span class="topline">Hello</span>
        <h1>Welcome to<span class="multiText">Zealous Bank</span></h1>
        <p>We, at Zealous Bank, are committed to become the bank of choice by providing superior, proactive, innovative, state-of-art banking services with an attitude of care and concern for the customers and patrons.</p>
        <div class="col">
             {/* create card for landing page */}
            <div class="card bg-warning text-center col-8 mt-5 ms-5">
                <div class="card-boby">
                    <h4 class="card-title"><i class="bi bi-house-fill"></i> Home Loans</h4>
                    <p class="card-subtitle">Register Now!</p>
                     {/* card-image*/}
                    <img src="/Images/Loan-PNG.png" alt="home" class="card-image float-end"/>
                    <ul class="container text-start fw-bolder">
                        <li>We help to build your place called HOME</li>
                        <li>Visit your nearest Zealous Branch</li>
                        <li class="text-danger">Give A Missed Call for Home Loans @1234567890</li>
                    </ul>
                    {/*for using go through kyc register page*/}
                   <button class="btn btn-outline-danger" id="register" onClick={setGoin}><LoginIcon></LoginIcon>Login</button>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card bg-warning text-center col-8 mt-5 ms-5">
                <div class="card-boby">
                    <h4 class="card-title"><i class="bi bi-cash-coin"></i> Gold Loan</h4>
                    <p class="card-subtitle">Register Now!</p>
                    <img src="/Images/gold.png" alt="home" class="card-image float-end"/>
                    <ul class="container text-start fw-bolder">
                        <li>Jewel to Cash at express speed, visit Zealous today</li>
                        <li>Jewel Loans for Agriculture, MSME, Domestic purposes with lower interest rate and attractive features</li>
                    </ul>
                   <button class="btn btn-outline-danger" id="register" onClick={setGoin}><LoginIcon></LoginIcon>Login</button>
                </div>
            </div>
        </div>
    </div>
    
     </>}
 </>
    )
}