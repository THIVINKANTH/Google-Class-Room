import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Home } from './HomePage'
import './Pagedesign.css'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LockResetIcon from '@mui/icons-material/LockReset';
import LoginIcon from '@mui/icons-material/Login';
import DangerousIcon from '@mui/icons-material/Dangerous';
export const Login=()=>
{
    // login page
    const[cview,setCview]=useState(false)
    const[user,setUser]=useState({
        "username":"",
        "password":""
    })
    const onperform=(eve)=>
    {
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    return(
        <>
        {(cview)?
        <>
        {alert("new will call")}
        <Home/>
        </>
        :
        <>
        <div className="container">
            <div className="row justify-content-center mt-5 ">
                <div className="col-lg-6 col-md-10 col-sm-12 p-5 shadow-lg" id="loginpage">
                    <div className="form-group">
                        <label id="user"><PersonPinIcon></PersonPinIcon>UserName</label>
                        <input type="text" onChange={onperform} value={user.username} name="username" placeholder="Enter username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label id="user"><LockResetIcon></LockResetIcon>Password</label>
                        <input type="password" onChange={onperform} value={user.password} name="password" placeholder="******" className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="col-3 btn btn-outline-success" onClick={()=>
                        {
                            if(user.username==="Thivin" && user.password==="12345")
                            {
                                sessionStorage.setItem("auth",user.username)
                                window.location.assign("/")
                            }
                            else if(user.username==="pradeep" && user.password==="12345")
                            {
                                sessionStorage.setItem("auth",user.username)
                                window.location.assign("/")
                            }
                            else{
                                alert("invalid values")
                            }

                        }}><LoginIcon></LoginIcon>Login</button>
                        <button className="col-3 btn btn-outline-danger" type="reset">Cancel<DangerousIcon></DangerousIcon></button>
                    </div>
                </div>
            </div>
        </div>
        </>}
        </>
    )
}