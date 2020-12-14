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

//  const showUsers = () => {
//    fetch('http://localhost:3000/signin')
//    .then(res => console.log(res))
//   //  .then(res =>  {
//   //    console.log(setAuth)
//   //    setAuth(res)
//   //  })
//   //  .catch(err => console.log(err))
//   // }
//  }
  return (
      <div className="hello">
        <a href={'http://localhost:8000/signin'}>auth</a>
        <button>click</button>
      </div>
  );
}

export default App;
