import react,{useState,useEffect} from "react";
import Heading from "./BelowNav/Heading";
import "./BelowNav/Header.css"
import HashLoader
from "react-spinners/HashLoader";
import { Container,Row,Col } from "react-bootstrap";
function Career() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },2000)
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
       <div>
       <Heading name="Career"></Heading>
       
      
       </div>
       
    }
    
    </div>
  )
}

export default Career