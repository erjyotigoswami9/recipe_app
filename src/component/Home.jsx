import React, { useContext, useEffect, useState } from 'react'
import '../../src/styles/items.css'
import AuthContext from '../Context/Auth';
import { Link, NavLink } from 'react-router-dom';

export const Home = () => {
  let {dataItems , setDataItems} = useContext(AuthContext) ;
  let {dataArr , setdataArr} = useContext(AuthContext) ;
  let {count,setCount} = useContext(AuthContext) ;
  let {loggedIn, setIsLoggedIn} = useContext(AuthContext) ;
  useEffect(()=>{
    console.log("data items in home page : ", dataItems) ;
    console.log("data array in home page : ", dataArr) ;
    if(dataArr.length==0)
    fetch(`https://dummyjson.com/recipes`)
    .then((res)=>res.json())
    .then((res)=>{console.log(res.recipes);  setdataArr([...res.recipes , ...dataItems]) ; console.log([...res.recipes , ...dataItems])  } ) ;
    else if(count>=0){
      
      setdataArr([...dataArr , ...dataItems]) ;
      setDataItems([]) ;
    }
    else{
      setDataItems([]) ;
    }
  },[])
  function deleteDataItem(itemId, event){
    if(loggedIn==true){
    event.stopPropagation() ;
      let ar = dataArr.filter(ele=>ele.id!=itemId) ;
      console.log("deleted updated left array : ",ar) ;
      setdataArr(ar) ;
      localStorage.setItem("FoodItemList",JSON.stringify(ar)) ;
    }
    else{
      alert("Pls login ...") ;
    }
  }
  return (
    <div className='div1' >
       
       {
        dataArr?.map(foodList=>{
          return (
            
            <div key={foodList.id} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" , paddingTop:"10px" , borderTop:"1px solid lightgrey"}}>
             <Link to={`/reciepe/${foodList.id}`} key={foodList.id}>
              <span> {foodList.id} </span>
              <img src={foodList.image} width={300} height={200} alt='image'/>
              <h3> {foodList.name} </h3>
              </Link>
              <button style={{
                backgroundColor: "red",
                border: "none",
                padding: "10px",
                fontSize: "22px",
                marginTop: "10px",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "10px",
                color: "whitesmoke"
    }}  onClick={(event)=>deleteDataItem(foodList.id , event)}>Delete Reciepe</button>
            </div>
           
          )
        })
       }

    </div>
  )
}
