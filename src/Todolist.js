import React, { useState } from "react";
import Todolitstcomp from "./Listcomp";
function Todolist() {
    const [binp, setinp] = useState('');
    const [arrbtn, setArrbtn] = useState([]);
    const [selectedInput, setSelectedinput] = useState(false);
    const Newinp = (e) => {
        setinp(e.target.value)
    }
    const Clickbtn = () => {
        if(binp ===''){
            alert('creat your list then submit')
            return ;
        }
        if(selectedInput !== false) {
            let listItems = [...arrbtn];
            console.log('sghcxhsacxhgscxghs',listItems)
            listItems[selectedInput] = binp;
            console.log(listItems);
            setArrbtn(listItems);
            setSelectedinput(false)
        }
        else {
            setArrbtn((oldItems) => {
                return [...oldItems,binp]
            })
        }    
        setinp('') 
    };
    const deletlist =(id)=>{
        setArrbtn((oldItems)=>{
            return oldItems.filter((arrelement,index)=>{
                return index !== id;
            })
        })
    };

    const updchnagehandler =(id)=>{
        // console.log('UPDATE', id, arrbtn[id]); 
        setinp(arrbtn[id]);
        setSelectedinput(id);
    }
    return (
        <>
        <div>
            <input type="text" placeholder="creat your list"
                value={binp}
                onChange={Newinp} />
            <button onClick={Clickbtn}>Submit</button>
            <br></br>
            <ol>
                {arrbtn.map((arrvalue, index) => {
                    return <Todolitstcomp
                    key={index}
                    id={index}
                    data={arrvalue}
                    deltselectuser={deletlist}
                    updselectuser={updchnagehandler}
                    />
                })
            }
            </ol>
            </div>
        </>

    )
}
export default Todolist;