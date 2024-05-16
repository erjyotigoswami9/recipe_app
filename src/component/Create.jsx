import React, { useContext, useState } from "react";
import AuthContext from "../Context/Auth";

export const Create = () => {
  let {dataItems , setDataItems} = useContext(AuthContext) ;
  let {count,setCount} = useContext(AuthContext) ;
  let [detailItem, setDetailItem] = useState({
    name: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    caloriesPerServing: "",
    image: "",
    ingredients: "",
    instructions : "",
    id: "",
  });
  function handleInputs(event) {
    setDetailItem({ ...detailItem, [event.target.name]: event.target.value });
  }
  function handleSubmitDetails(event) {
    event.preventDefault();
    console.log(dataItems) ;
    console.log(detailItem);
    let aarr = [...dataItems,{...detailItem}] ;
   
    console.log("data item : ",aarr)
    setDataItems(aarr) ;
    
    setCount(count++) ;

    setDetailItem({
      name: "",
      prepTimeMinutes: "",
      cookTimeMinutes: "",
      caloriesPerServing: "",
      image: "",
      ingredients: "",
      instructions:"",
      id: "",
    });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmitDetails}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          placeholder="title"
          name="name"
          
          onChange={handleInputs}
          value={detailItem.name}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="number"
          placeholder="prepTimeMinutes"
          name="prepTimeMinutes"
          
          onChange={handleInputs}
          value={detailItem.prepTimeMinutes}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="number"
          placeholder="cookTimeMinutes"
          name="cookTimeMinutes"
          
          onChange={handleInputs}
          value={detailItem.cookTimeMinutes}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="number"
          placeholder="caloriesPerServing"
          name="caloriesPerServing"
          
          onChange={handleInputs}
          value={detailItem.caloriesPerServing}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="text"
          placeholder="enter url"
          name="image"
          
          onChange={handleInputs}
          value={detailItem.image}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="text"
          placeholder="enter ingredient name with comma separator"
          name="ingredients"
          
          onChange={handleInputs}
          value={detailItem.ingredients}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />{" "}
        {/** using split by comma , to convert into array of ingredients */}
        <input
          type="text"
          placeholder="enter instructions with comma separator"
          name="instructions"
          
          onChange={handleInputs}
          value={detailItem.instructions}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />{" "}
        {/** using split by comma , to convert into array of instructions */}
        <input
          type="number"
          placeholder="id"
          name="id"
          onChange={handleInputs}
          value={detailItem.id}
          style={{
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
            padding: "5px",
            textAlign: "center",
          }}
          required
        />
        <input
          type="submit"
          style={{
            fontSize: "20px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "red",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
        />
      </form>
    </div>
  );
};
