
import React, {Component} from 'react';
import './App.css';
import AddCitySight from './components/AddCitySight'
import { doc, setDoc, getDoc, collection  } from "firebase/firestore";
import { db } from "./firebaseconfig";


//import axios from 'axios';


const googleIdInput = document.getElementById('googleIdInput');
const cityNameInput= document.getElementById('cityNameInput');
const sightNameInput= document.getElementById('sightNameInput');
const imgUrlInput = document.getElementById('imgUrlInput');
const ratingInput = document.getElementById('ratingInput'); 





class App extends Component {

/* updateSights=(e)=>{
  e.preventDefault();
  this.setState({
    sight: {...this.state.sight, [e.target.name]:e.target.value}
  })
  //console.log(cityNameInput.value, imgUrlInput.value,ratingInput.value, sightNameInput.value);
  //const google = googleIdInput.value;
  console.log(this.state.sight);
 const sightRef = doc(db, 'sights', google);
//setDoc(sightRef, newSight, { merge: true });
} */




render() {


  const sightRef = doc(db, 'sights', 'ChIJ-1ZkcY4LkkYRsDmSuVO1AAo'); //Google place id for Suomenlinna
  //setDoc(sightRef, newSight, { merge: true });
  //const sightsRef = collection(db, 'sights'); 
  const docSnap = getDoc(sightRef);
  
  setTimeout(1500, ()=>{console.log("Document data:", docSnap.data())})
 
  



  return (
    <div className="App">
      <h1>Home Page</h1>
<AddCitySight />
<h3>Testing:</h3>
<p></p>

 
    </div>
  )
}}
export default App;

/* SANTOSH'S AXIOS EXAMPLE:
const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('Getting data from:::', response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
 
  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    )
  })
  return (
    <div className="App">
      <table>
        <thead><th>ID</th><th>Title</th><th>Body</th></thead>
        <tbody>{arr}</tbody>
      </table>
    </div>
  );*/

