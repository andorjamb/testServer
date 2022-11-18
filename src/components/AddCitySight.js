import React, {Component }from "react";
import { doc, setDoc,getDoc  } from "firebase/firestore";
import { db } from "../firebaseconfig";


const googleIdInput = document.getElementById('googleIdInput');
const cityNameInput= document.getElementById('cityNameInput');
const sightNameInput= document.getElementById('sightNameInput');
const imgUrlInput = document.getElementById('imgUrlInput');
const ratingInput = document.getElementById('ratingInput'); 

class AddCitySight extends Component {

  state =
  { cityName: "",
    imgUrl: "",
    rating: 0 ,
    sightName: ""}

 componentDidMount(){
  //get form data and update state
 this.setState({})

 }

 componentDidUpdate(){

  //send data to firebase
 }
       


     
    render(){

     



  return (<>
    <form id="sightsForm" onSubmit={this.handleUpdate}>
        <h2>citySights Management Section</h2>
          <label htmlFor="cityNameInput">City name:</label>
      <input type="text" name="cityNameInput" id="cityNameInput" />
   
   <label htmlFor="sightNameInput">City Sight:</label>
    <input type="text" name="sightNameInput" id="sightNameInput" />

    <label htmlFor="ratingInput">Rating:</label>
    <input type="number" name="ratingInput" id="ratingInput" />
  
  <label htmlFor="googleIdInput">Google id:</label>
    <input type="text" name="googleIdInput" id="googleIdInput" />    
 
   <label htmlFor="imgUrlInput">Image url:</label>
    <input type="text"name="imgUrlInput"id="imgUrlInput" />
            
<button type="submit" >Save </button>
    </form>
    <div>
      <h3>Submitted Values:</h3>
      <p>CityName: {this.state.cityName}, imgUrl: {}, rating: {}, sightName{}
      </p>
    </div>
    </>
)

}
}

export default AddCitySight;





/* 
class Sight  { 
  constructor(cityName,imgUrl,rating,sightName){
  this.cityName =cityName;
  this.imgUrl =imgUrl;
  this.rating =rating;
  this.sightName = sightName;
  }
} */
 


  //const newSight = new Sight(cityNameInput.value, imgUrlInput.value,ratingInput.value, sightNameInput.value);
  //console.log(newSight);
  //console.log(this.state);
 // const google = googleIdInput.value;
 //const sightRef = doc(db, 'sights', google);
 //console.log(google);
//setDoc(sightRef, {cityName: cityNameInput.value, imgUrl:imgUrlInput.value, rating: ratingInput.value, sightName: sightNameInput.value});)
//  }
