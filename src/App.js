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

const clientId = "16980cfa0456b2c465d9"
const authRoute = `https://github.com/login/oauth/authorize?scope=repo&client_id=${clientId}`
const repoList = ``


function App() {

  // const [authLink, setAuth] = useState()

 const repoList = () => {
   fetch('http://localhost:8000/repos/list')
   .then(res => res.json())
   .then(console.log)
   .catch(err => console.log(err))
 }
  return (
      <div className="hello">
        <a href={authRoute}>auth</a>
        <button onClick={repoList}>list repos</button>
      </div>
  );
}

export default App;
