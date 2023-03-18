import './App.css';
import Login from './component/Login/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './component/Signup/SignUp';
import CreateRecipe from './component/Recipe/CreateRecipe/CreateRecipe';
import ShowRecipe from './component/Recipe/ShowRecipe/ShowRecipe';
function App() {
  return (

    <div className="App">
      {/* <div style={{ textAlign: "center", display:"flex", margin:"1% 0 1% 34%"}}>
        <span>
          <img src='https://th.bing.com/th/id/OIP.4ihPWq0yuERvxEfGSQglnwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width="240%" height="66vh" style={{margin:"3% 0 0 92%"}} />
        </span>
        {/* <span style={{fontFamily: "serif", fontSize:"250%",margin:".5% 0 1% 7%"}}>
          Recipe App
        </span> */}


      {/* </div> */} 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/create' element={<CreateRecipe />} />
        <Route path='/post' element={<ShowRecipe />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
