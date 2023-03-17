import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { create1 } from './TranasctionDetails'
import './Pagedesign.css'
export const NewAccount=()=>
{
    const[process,setProcess]=useState({
        "acNumber":0,
        "acHolder":"",
        "cusAadhar":0,
        "cusPan":"",
        "acBalance":0,
        "cusContact":0,
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
    const register=async()=>
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
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AccountHolder</label>
                            <input type="text"
                            name="acHolder"
                            onChange={track}
                            value={process.acHolder}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AadharNumber</label>
                            <input type="number"
                            name="cusAadhar"
                            onChange={track}
                            value={process.cusAadhar}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">PANNumber</label>
                            <input type="text"
                            name="cusPan"
                            onChange={track}
                            value={process.cusPan}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">AccountBalance</label>
                            <input type="number"
                            name="acBalance"
                            onChange={track}
                            value={process.acBalance}
                            className="form-control" />
                        </div>
                        <div className="row">
                            <label className="form-label">Contact</label>
                            <input type="tel"
                            name="cusContact"
                            onChange={track}
                            value={process.cusContact}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">Email</label>
                            <input type="email"
                            name="cusEmail"
                            onChange={track}
                            value={process.cusEmail}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">CustomerId</label>
                            <input type="text"
                            name="cusUserid"
                            onChange={track}
                            value={process.cusUserid}
                            className="form-control" required/>
                        </div>
                        <div className="row">
                            <label className="form-label">Password</label>
                            <input type="password"
                            name="cusPassword"
                            onChange={track}
                            value={process.cusPassword}
                            className="form-control" required/>
                        </div>
                        <div className="row justify-content-around mt-5">
                            <button className="btn btn-outline-success col-4 ms-3" onClick={register} type="submit" value="Register">Register</button>
                            <button className="btn btn-outline-danger col-4 ms-3" onClick={reset} type="reset" value="Cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}