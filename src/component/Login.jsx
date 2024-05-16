import React, { useContext, useEffect, useState } from 'react'
// import { AuthProvider } from '../Context/Auth';
import AuthContext from '../Context/Auth';

export const Login = () => {
  let {loggedIn , setIsLoggedIn} = useContext(AuthContext) ;

  let [formDataObj , setFormDataObj] = useState({}) ;
  useEffect(()=>{
    console.log(loggedIn) ;
  },[loggedIn])
  function handleInputs(e){
    setFormDataObj({...formDataObj , [e.target.name] : e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault() ;
    console.log(formDataObj) ;
    setIsLoggedIn(true) ;
    localStorage.setItem("loggedIn" , "true") ;
    console.log(loggedIn) ;
  }
  return (
     <div style={{ margin:"auto" , width:"fit-content", border:"2px solid lightgrey", paddingLeft:"20px", paddingRight:"20px", textAlign:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , marginTop:"150px"}}>

   { loggedIn==true ?
       <div style={{padding:"20px"}}> <button style={{fontSize:"20px", padding:"8px" , backgroundColor:"blue" , color:"white", border:"none", borderRadius:"4px"}} disabled={loggedIn==true? false : true }  onClick={()=>{
        setIsLoggedIn(false) 
        localStorage.setItem("loggedIn","false") 
      }}>Logout</button> </div> 
       
    :
    loggedIn==false && <form onSubmit={handleSubmit} style={{display:"flex" , flexDirection:"column" , width:"fit-content" , margin:"auto", textAlign:"center", marginTop:"30px"}}>
        <input type='text' placeholder='username' name='username' onChange={handleInputs} style={{fontSize:"20px",marginBottom:"10px", padding:"5px", textAlign:"center"}} required/>
        <input type='password' placeholder='password' name='password' onChange={handleInputs} style={{fontSize:"20px",marginBottom:"10px", padding:"5px", textAlign:"center"}} required/>
        <input type='submit' style={{fontSize:"20px", padding:"5px", textAlign:"center"}}/>
      </form> 
    }
     

   
          <h1>Login Status : {`${loggedIn}`} </h1>

           
       

    </div>
  )
}
