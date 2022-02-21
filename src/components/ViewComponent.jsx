import React from 'react'



export const ViewComponent=(props)=>{

    return (
        <div style={{width:'50vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFBC61CC'}}>
            <p style={{fontSize:40}}>{props.input1}</p>
        </div>        
    )
}