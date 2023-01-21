import React from "react";

const Todolitstcomp = (props) => {
    return (
        <>
        <li> {props.data} </li> 
        <button onClick={()=>props.deltselectuser(props.id)}>delete</button>
        <button onClick={()=>props.updselectuser(props.id)}>updated</button>
        </>
        ) 
}

export default Todolitstcomp;