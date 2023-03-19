import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { upadate } from './TranasctionDetails'

export const Updating=(myvalue)=>
{
    const[pos,setPos]=useState(myvalue.who)
    const[process,setProcess]=useState({
        "transId":myvalue.mention.transId,
        "transType":myvalue.mention.transType,
        "transMode":myvalue.mention.transMode,
        "transAmount":myvalue.mention.transAmount,
        "transDate":myvalue.mention.transDate,
        "toPay":myvalue.mention.toPay
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
    const register=()=>
    {
        upadate(process,pos)
        upadate("your transaction is updated")
    }
    const reset=()=>
    {
        alert('Rejected....!')
    }
    return(
        <>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-3">
                    <h3 className="mt-5 mb-5 text-warning fw-bolder">New Payment</h3>
                    <div className="row justify-content-center">
                        <div className="mt-3">
                            <label className="form-label">TransactionId</label>
                            <input type="number"
                            name="transId"
                            onChange={track}
                            value={process.transId}
                            className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label">TransactionType</label>
                            <select name="transType"
                            onChange={track}
                            value={process.transType}
                            className="form-control">
                                <option selected hidden>select type</option>
                                <option>NEFT</option>
                                <option>UPI</option>
                                <option>RTGS</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <label className="form-label">TransactionMode</label>
                            <select name="transMode"
                            onChange={track}
                            value={process.transMode}
                            id="transMode"
                            className="form-control">
                                <option selected hidden>select mode</option>
                                <option>Debit Card</option>
                                <option>Credit Card</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <label className="form-label">TransactionAmount</label>
                            <input type="number"
                            name="transAmount"
                            onChange={track}
                            value={process.transAmount}
                            className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label">TransactionDate</label>
                            <input type="date"
                            name="transDate"
                            onChange={track}
                            value={process.transDate}
                            className="form-control"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label">ToPay</label>
                            <input type="text"
                            name="toPay"
                            onChange={track}
                            value={process.toPay}
                            className="form-control"/>
                        </div>
                        <div className="row justify-content-around mt-4">
                            <button className="btn btn-outline-success col-3 ms-3" onClick={register} type="submit" value="Send" id="send">Send</button>
                            <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Cancel" id="cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}