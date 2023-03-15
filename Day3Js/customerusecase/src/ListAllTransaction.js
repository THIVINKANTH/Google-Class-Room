import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { list, remove } from './TranasctionDetails'



export const ListAlltran=()=>
{
    const[temparray,setTemparray]=useState([])

    const result=()=>
    {
        setTemparray(list)
    }
    useEffect(()=>
    {
        result()
    })
    // transaction List using with table
    return(
        <>
        <div className="container mt-5 bg-warning">
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4 shadow rounded">
                        <thead>
                            <tr>
                                <th>TransactionId</th>
                                <th>TransactionType</th>
                                <th>TransactionMode</th>
                                <th>TransactionAmount</th>
                                <th>TransactionDate</th>
                                <th>ToPay</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                temparray.map((ele,ind)=>
                                (
                                    <tr>
                                        <td>{ele.transId}</td>
                                        <td>{ele.transType}</td>
                                        <td>{ele.transMode}</td>
                                        <td>{ele.transAmount}</td>
                                        <td>{ele.transDate}</td>
                                        <td>{ele.toPay}</td>
                                        <td><button className="btn btn-outline-info text-dark">Edit</button></td>
                                        <td><button className="btn btn-outline-danger text-dark" onClick={
                                            ()=>
                                            {
                                                setTemparray(remove(ind))
                                            }
                                        }>Delete</button></td>
                                    </tr>
                                ))
                            }
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}