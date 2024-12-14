import Todoitem from "./Todoitem"
import App from "../App"
const Todoitems =({todoitems, onDeleteClick})=>{
  return<>
  
  <div className="items-container">
    {todoitems.map(item =><Todoitem tododate={item.duedate} todoname={item.name} onDeleteClick={onDeleteClick}></Todoitem>)}
</div>
  </>
}

export default Todoitems