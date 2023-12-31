import { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./Home";

export default function MemberRegisterComp()
{
    const init ={

        fname:"",
        lname:"",
        emailid:"",
        uid:"",
        pwd:"",
        bloodgroup:"",
        height:"",
        weight:"",
        contactno:"",
        address:"",
        goal_id:"",
        usertype_id:4

    }

    const reducer = (state , action)=>{
         switch(action.type)
         {
             case 'update':
                return {...state , [action.fld]:action.val}
            
             case 'reset':
                return init;
         }
    }

    const [info,dispatch]=useReducer(reducer,init)
    const [msg,setMsg] = useState(" ");
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions ={
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/registerMember",reqOptions)
        .then(resp=> { 
                if(resp.ok)
                    return resp.json();
                else
                    throw new Error("server error");
            })
            .then(obj=> {
                alert("Reg succsessful. Try login"); 
                navigate("Login");
            
            })
            .catch((error)=> alert("Server error. Try later"))
        
    }


     return(
        <div>
            <nav className="navbar navbar-expand-sm bg-primary  mb-3">
              <div className="container-fluid">
               <ul className="navbar-nav">
               <li className="nav-item">
                <Link to="/" className="nav-link px-3"style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold' , marginLeft: '100px'}}> About </Link>
              </li>
              <li className="nav-item">
                <Link to="Login" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}} >Exercise</Link>
              </li>
              <li className="nav-item">
                <Link to="Member_register" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}}>Food</Link>
              </li>
              <li className="nav-item">
                <Link to="Staff_register" className="nav-link px-3" style={{ fontSize: '18px', color: 'white' ,fontWeight: 'bold'}}>Health</Link>
              </li>
               </ul>
              </div>
            </nav>
            <br/>
            <br/>
            <div className="register-box">
                <h2 style={{ fontSize: '18px', color: 'blue' ,fontWeight: 'bold'}}>Member Registration</h2>
                <form>
                    <div className="input-group">
                    <label htmlFor= "uid" className="form-label">First name :</label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname} 
                        onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "uid" className="form-label">Last name :</label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname} 
                        onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "emailid" className="form-label">Email ID   : </label>
                    <input type="text" className="form-control" id="emailid" name="emailid"  value={info.emailid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'emailid',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "uid" className="form-label">User ID :</label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid} 
                        onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "pwd" className="form-label">Password : </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd} 
                       onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "bloodgroup" className="form-label">Blood group : </label>
                    <input type="text" className="form-control" id="bloodgroup" name="bloodgroup" value={info.bloodgroup} 
                       onChange={(e)=>{dispatch({type:'update',fld:'bloodgroup',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "height" className="form-label">Height : </label>
                    <input type="text" className="form-control" id="height" name="height" value={info.height} 
                       onChange={(e)=>{dispatch({type:'update',fld:'height',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "weight" className="form-label">Weight : </label>
                    <input type="text" className="form-control" id="weight" name="weight" value={info.weight} 
                       onChange={(e)=>{dispatch({type:'update',fld:'weight',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "contactno" className="form-label">Contact no : </label>
                    <input type="text" className="form-control" id="contactno" name="contactno" value={info.contactno} 
                       onChange={(e)=>{dispatch({type:'update',fld:'contactno',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor= "address" className="form-label">Address : </label>
                    <input type="text" className="form-control" id="address" name="address" value={info.address} 
                       onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor= "goal_id" className="form-label">Goal : </label>
                        <select type="text" className="form-control" id="goal_id" name="goal_id" value={info.goal_id} 
                       onChange={(e)=>{dispatch({type:'update',fld:'goal_id',val:e.target.value})}}>
                            <option value="">Select...</option>
                            <option value="2">weight loss</option>
                            <option value="1">weight gain</option>
                            <option value="3">fitness</option>
                        </select>
                    </div>

                    <div className="button-group">
                    <button type="submit" className="btn btn-primary px-3" onClick={(e)=>{sendData(e)}}>Register</button>
                    <button type="reset" className="btn btn-primary px-3"onClick={(e)=>{dispatch({type:'reset'})}}>Reset</button>
                    </div>
                </form>
                {/* <p>{JSON.stringify(info)}</p> */}
                <p>{msg}</p>
                </div>
               <Routes>
                <Route path="home" element={<Home></Home>}></Route>
               </Routes>

        </div>
    )
}