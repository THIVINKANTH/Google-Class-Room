import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { list, remove} from './TranasctionDetails'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Reading } from './Readpage';
import { Updating } from './UpdateTransaction';


export const ListAlltran=()=>
{
    const[temparray,setTemparray]=useState([])
    const[readview,setReadview]=useState("")
   const search=[
    {
        "transId":"1234",
        "transType":"",
        "transMode":"",
        "transAmount":"",
        "transDate":"",
        "toPay":"Thiya"
    }
   ]
    const searchid=(e)=>
    {
        e.preventDefault();
        setReadview(e.traget.value);
    };
    if(readview.length>0)
    {
        search.filter((obj)=>
        {
            return obj.toPay.match(readview);
        });
    }
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
        <div className=" container d-flex justify-content-end input-group">
                <input type="search" placeholder="Search" onChange={searchid} value={readview}/>
                <button className="btn btn-outline-primary" type="button" onClick={()=>
                {
                    search.map((searchid,index)=>
                    {
                        searchid()
                    })
                    
                }}><SearchIcon></SearchIcon>Search</button>
        </div>
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4 shadow rounded mt-3">
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
                                        <td><button className="btn btn-outline-info text-dark" onClick={()=>
                                        {

                                        }}>Edit</button></td>
                                        <td><button className="btn btn-outline-danger text-dark" onClick={
                                            ()=>
                                            {
                                                setTemparray(remove(ind))
                                            }
                                        }><DeleteIcon></DeleteIcon>Delete</button></td>
                                    </tr>
                                ))
                            }
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            <button className="btn btn-outline-primary col-2" >Filter</button>
        </div>
        </>
    )
}