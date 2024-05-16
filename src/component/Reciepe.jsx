import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../Context/Auth';
import '../styles/singleItem.css'

export const Reciepe = () => {
  let {dataArr , setdataArr} = useContext(AuthContext) ;
 
  let {id} = useParams() ;
  let [arr1 ,setArr1] = useState() ;
  console.log(id) ;

  useEffect(()=>{
     console.log("data array",dataArr) ;
     let ar = dataArr?.filter(foodItem=>foodItem.id==id) ;
     console.log("id elements : ", ar) ;
     setArr1(ar) ;
  },[])
  return (
    <div className='divParent'>
      {
      arr1?.map(foodItems=>{
        return (
          <div key={foodItems.id}>
            <h1 style={{letterSpacing:"1px", fontSize:"40px"}}> {foodItems.name} </h1>
            <img src={foodItems.image} width={500} height={500} alt='image' />
            
            <h3> Preparation Time in Minutes : {foodItems.prepTimeMinutes} </h3>
            <h3> Cook Time in Minutes : {foodItems.cookTimeMinutes} </h3>
            <h3> Calories Per Serving : {foodItems.caloriesPerServing} </h3>
            <h3> Instructions : 
              {
                 typeof(foodItems.instructions)=="string" && <span>{foodItems.instructions} </span>
              }
               </h3>
            <ul>
              {typeof(foodItems.instructions)!="string" && foodItems.instructions?.map((liItem)=>{
                return (
                  <li key={liItem}> {liItem} </li>
                )
              })
              }
            </ul>
            <h3> Ingredients :
            {
                 typeof(foodItems.ingredients)=="string" && <span>{foodItems.ingredients} </span>
              }
            </h3>
            <ul>
              {
                typeof(foodItems.ingredients)!="string" && foodItems.ingredients?.map((itemOfFood)=>{
                  return (
                  <li key={itemOfFood}> {itemOfFood} </li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
      }
    </div>
  )
}

