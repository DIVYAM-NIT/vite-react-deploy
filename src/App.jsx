import React,{useState} from 'react'
import Calculator_layout from "./components/Calculator_layout"
import Heading from "./components/Heading"

function App() {

  const [intext,setintext]=useState("");

  const onChange=(e)=>{
    setintext(e.target.value);
  }

  
  const enter=(e)=>{
    setintext(intext + e.target.innerText);
  }
  
  const evaluate=()=>{
    setintext(eval(intext) + "");
  }

  const del=()=>{
    setintext(intext.slice(0,-1));
  }

  const clr=()=>{
    setintext("");
  }

  return (
    <center>
      <Heading/>
      <Calculator_layout onChange={onChange} enter={enter} evaluate={evaluate} intext={intext} del={del} clr={clr}/>
    </center>
  )
}
export default App
