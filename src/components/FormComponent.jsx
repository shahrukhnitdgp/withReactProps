import React, { useState } from 'react'



export const FormComponent=(props)=>{
    const [input1,setInput1]=useState('')

    return (
        <div style={{width:'50vw',height:'calc(100vh - 200px)',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center",backgroundColor:'#D0C0DFCC'}}>
            <div style={{display:'flex',flexDirection:"column",gap:10}}> 
                <label for="input1">Input1</label>
                <input type="text" id="input1" name="input1" onChange={(ev)=>setInput1(ev.target.value)} />
                <button type="button" onClick={(ev)=>props.onClick({'input1':input1})}>Submit</button>
            </div>  
        </div>
    )
}
