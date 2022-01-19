
import { Link } from "react-router-dom";
import React,{useEffect,useState,params} from "react";
import axios from "axios";
export default function Expenses() {
  let[name,setName]=useState("")
  let[password,setPassword]=useState("")
  let[sign,setSing]=useState("")
  function handleName(event){
    setName((name=event.target.value));

  }
  function handlePassword(event){
    setPassword((password=event.target.value));
  }
  function handleSubmit(event){
    event.preventDefault();
    axios({
      method:"get",
      url:"api/users/login",
      params:{username:name,password:password}

    })
    .then((res =>{window.alert(res.data)}))
    
  }

    return (
     
      <div>
            
      <form onSubmit={handleSubmit}>
          <ul>
          
          </ul>
          <label>
fristName:
</label>
<input type="text"Name="username" value={name} onChange={handleName} />
<label>
pasword:
</label>
<input type="text"pasword="password" value={password} onChange={handlePassword}/> 

<Link to="/App">
 <input type="Submit" value="SignIn"  />
 </Link>
</form>
      <Link to="/login"><button>newUser</button></Link>
    <button>continue to home</button>

  </div>
    );
  }