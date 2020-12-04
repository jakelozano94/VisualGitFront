import logo from './logo.svg';
import './App.css';
import {useState, react} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'


function App() {

  const [authLink, setAuth] = useState("blah")

 const showUsers = () => {
   fetch('http://localhost:3000/signin')
   .then(res=> res.json())
   .then(res =>  {
     console.log(setAuth)
     setAuth(res)
   })
   .catch(err => console.log(err))
 }
  return (
      <div className="hello">
        <a href={authLink}>auth</a>
        <button onClick={showUsers}>click</button>
      </div>
  );
}

export default App;
