import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Item from './components/item/item';


function App() {
  return (
    <div >
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        {/* <Route path="/" Component={Sidebar}></Route> */}
        {/* <Route path="/" Component={Navbar}></Route>    */}
        <Route path="/" Component={Item}></Route>   

      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
