import { useState } from "react";

function Addtodo({onnewitem}){

  const [todoname, settodoname] =useState([])
  const [tododate, settododate] =useState([])

  const handlenamechange=(event)=>{
settodoname(event.target.value)
  }
  const handledatechange=(event)=>{
    settododate(event.target.value)
  }

  const handleAddbutton=()=>{
    onnewitem(todoname, tododate)
    settododate("")
    settodoname("")
  }
  return<>
 <div className="container">
  <div className="row kg-row ">
    <div className="col-6"><input type="text" placeholder="Enter Todo Here" value={todoname} onChange={handlenamechange}/></div>
    <div className="col-4"><input type="date"  value={tododate} onChange={handledatechange}></input></div>
    <div className="col-2"><button type="button" className="btn btn-success kg-button "
    onClick={handleAddbutton}
    >Add</button></div>
  </div>
  </div>
  </>
}

export default Addtodo;