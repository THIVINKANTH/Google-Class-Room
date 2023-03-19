import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { create1 } from './CustomerDetails'
import './Pagedesign.css'
export const NewAccount=()=>
{
    // form fildes
    const[process,setProcess]=useState({
        "acNumber":"",
        "acHolder":"",
        "cusAadhar":"",
        "cusPan":"",
        "acBalance":"",
        "cusContact":"",
        "cusEmail":"",
        "cusUserid":"",
        "cusPassword":""
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    // create new form method
    const register=()=>
    {
        alert('Welcome to Zealous Bank'+JSON.stringify(process))
        create1(process);
    }
    const reset=()=>
    {
        alert('Rejected.....!')
    }
    return(
        <>
        {/* create new account form  */}
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-3">
                    <h3 className="text-center mt-5 mb-5 text-primary">Zealous Bank</h3>
                    <div className="row jstify-content-center">
                        <div className="row">
                            <label className="form-label">AccountNumber</label>
                            <input type="number"
                            name="acNumber"
                            onChange={track}
                            value={process.acNumber}
                            id="acnumber"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AccountHolder</label>
                            <input type="text"
                            name="acHolder"
                            onChange={track}
                            value={process.acHolder}
                            id="acholder"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AadharNumber</label>
                            <input type="number"
                            name="cusAadhar"
                            onChange={track}
                            value={process.cusAadhar}
                            id="aadhar"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">PANNumber</label>
                            <input type="text"
                            name="cusPan"
                            onChange={track}
                            value={process.cusPan}
                            id="pannumber"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AccountBalance</label>
                            <input type="number"
                            name="acBalance"
                            onChange={track}
                            value={process.acBalance}
                            id="acbalance"
                            className="form-control" />
                        </div>
                        <div className="row">
                            <label className="form-label">Contact</label>
                            <input type="tel"
                            name="cusContact"
                            onChange={track}
                            value={process.cusContact}
                            id="contact"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">Email</label>
                            <input type="email"
                            name="cusEmail"
                            onChange={track}
                            value={process.cusEmail}
                            id="email"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">CustomerId</label>
                            <input type="text"
                            name="cusUserid"
                            onChange={track}
                            value={process.cusUserid}
                            id="cusid"
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">Password</label>
                            <input type="password"
                            name="cusPassword"
                            onChange={track}
                            value={process.cusPassword}
                            id="cuspassword"
                            className="form-control" required/>
                        </div>
                        <div className="row justify-content-around mt-5">
                            <button className="btn btn-outline-success col-4 ms-3" onClick={register} type="submit" value="Register" >Register</button>
                            <button className="btn btn-outline-danger col-4 ms-3" onClick={reset} type="reset" value="Cancel" >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}