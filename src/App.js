import "./App.css";
import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TopHeader from "./Components/TopHeader";
import Aos from 'aos'
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    Aos.init({duration:2000});
    setLoading(true)
    setTimeout(()=>{
       setLoading(false)
    },1000)
  },[])
  return (
   <div>
   {
    loading ?
    <div className="loading">
    <HashLoader
    loading={loading}   size={30}  color={"#162447"} />
    </div>
    :
    <div className="over">
  <TopHeader></TopHeader>
  <Navbar/>
   </div>
   }
   
   </div>
  );
}

export default App;
