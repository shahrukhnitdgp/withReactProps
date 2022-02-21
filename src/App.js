import React from 'react'
import './App.css';
import {FormParent} from '../src/components/FormParent'
import {ViewComponent} from '../src/components/ViewComponent'


function App() {
  const [formFields,setFormFields]=React.useState({
    input1:''
  })

  return (
    <div style={{display:'flex',flexDirection:"row",height:'100vh',width:'90vw'}}>
      <div style={{display:'flex',flexDirection:"column"}} ><FormParent onClick={setFormFields}/></div>
      <div><ViewComponent input1={formFields.input1}/></div>
    </div>
  );
}

export default App;
