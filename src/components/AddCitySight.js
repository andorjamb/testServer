import React from "react";
import { doc, setDoc  } from "firebase/firestore";
import { db } from "../firebaseconfig";


const AddCitySight= ()=>{

class Sight  { 
  constructor(googleId,cityName,sightName,imgUrl, rating){
  this.googleId = googleId;
  this.cityName =cityName;
  this.sightName = sightName;
this.imgUrl =imgUrl;
this.rating =rating;
  }
}

/* const getSights = async () => {
    const data = await getDocs(ref);
    return data; 
  }; */


const googleId = document.getElementById('googleId');
const cityName= document.getElementById('cityName');
const sightName= document.getElementById('sightName');
const imgUrl = document.getElementById('imgUrl');
const rating = document.getElementById('rating');


const handleUpdate= async (e) => {
    e.preventDefault();
    let newSight = new Sight(googleId.value, cityName.value, sightName.value,
     imgUrl.value, rating.value);
   const sightRef = doc(db, 'sights', {googleId});
setDoc(sightRef, {newSight}, { merge: true });
  }

  return (
  
    <form id="sightsForm" onSubmit={handleUpdate} >
        <h2>citySights Management Section</h2>
          <label for="cityName">City name:</label>
        <select name="cityName" id="cityName">
            <option value="helsinki">helsinki</option>
                <option value="turku">turku</option>
                <option value="tampere">tampere</option>
                <option value="oulu">oulu</option>
                <option value="porvoo">porvoo</option>
                <option value="pori">pori</option>
              </select>
   
   <label for="sightName">City Sight:</label>
    <input type="text" name="sightName" id="sightName" />

    <label for="rating">Rating:</label>
    <input type="number" name="rating" id="rating" />
  
  <label for="googleId">Google id:</label>
    <input type="text" name="googleId" id="googleId" />    
 
   <label for="imgUrl">Image url:</label>
    <input type="text"name="imgUrl"id="imgUrl"/>
            
<button type="submit">Save </button>
    </form>
)

}

export default AddCitySight;
