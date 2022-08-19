import React, { useState } from 'react'

export default function Tododlist() {
    const[input,setInput]=useState();
    const[value,setValue]=useState([]);
    const[show,setShow]=useState(false);
    const[btn,setBtn]=useState(true);

    const inputHandle=(event)=>{
        setInput(event.target.value);
    }

    const formHandle=(e)=>{
        e.preventDefault();
        setValue([...value,input]);
        setInput("");
        setShow(true);
        setBtn(false);
    }

  return (
    <div>
    <form onSubmit={formHandle}>
      <input type="text" placeholder="enter fruit name" value={input} onChange={inputHandle}/>
      <h6>click on button btn also hide</h6>
      {btn?(
        <button>ADD</button>
      ):null
       
      }
   
      {show?(
        <h4>Bydefault show {value}</h4>
      ):null
      }
      <div className='show_data'>
      <ul>
          {value.map((item)=>(
              <li>{item}</li>
          ))}
      </ul>
      </div>
      </form>
    </div>
  )
}
