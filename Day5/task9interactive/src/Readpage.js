import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { read } from './TranasctionDetails'

export const Reading=(myvalue)=>
{
    const[search,setSearch]=useState({
        "transId":"",
        "transType":"",
        "transMode":"",
        "transAmount":"",
        "transDate":"",
        "toPay":""
    })
    const searchreading=()=>
    {
        setSearch(read(myvalue))
    }
    useEffect(()=>
    {
        searchreading();
    })
    return(
        <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="card bg-light col-lg-5 col-md-8 col-sm-12">
                    <div className="card-title bg-light">
                       TransactionId: {search.transId}
                    </div>
                    <div className="card-body">
                        <p>Date: {search.transDate}</p>
                        <p>Amount: {search.transAmount}</p>
                        <p>TransactionMode: {search.transMode}</p>
                        <p>TransactionType: {search.transType}</p>
                        <p>ToPay: {search.toPay}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}