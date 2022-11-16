
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginContextProvider } from './components/Context.js';
import './App.css';
import HomeView from './views/HomeView';
import Page2View from './views/Page2View.js';
import SigninRedirect from './components/SigninRedirect.js';
import Navbar from './components/Navbar';
//import { isContext } from 'vm';
//import axios from 'axios';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LoginContextProvider>
        <Routes>
          <Route path="/" element={<HomeView />}>Home</Route>
          <Route path="/page2" element={<Page2View />}>Page2</Route>
          <Route path="/signin" element={<SigninRedirect />}>SigninRedirect</Route>

        </Routes>

      </LoginContextProvider>
    </div>
  )
}
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

