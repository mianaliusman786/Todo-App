import { useState } from "react";  // Importing the useState hook from React to manage state in the component
import Addtodo from "./Component/Addtodo";  // Importing the Addtodo component to handle new todo item addition
import Appname from "./Component/Appname";  // Importing the Appname component for the app title/header
import Todoitems from "./Component/Todoitems";  // Importing the Todoitems component to display the todo list
import Wellcomemessage from "./Component/wellcomemessage";  // Importing the Wellcomemessage component to show a welcome message when no todo items exist

function App() {

  // `todoitemss` is the initial array of todo items. These items are used to populate the list when the app first loads.
  const todoitemss = [
    { name: "buymilk", duedate: "14/12/24" },  // First todo item: "buymilk" with a due date of "14/12/24"
    { name: "Go to College", duedate: "14/12/24" },  // Second todo item: "Go to College" with a due date of "14/12/24"
  ];

  // `todoitem` is a state variable that holds the current list of todo items. 
  // Initially, it's set to `todoitemss` (the static initial items).
  let [todoitem, settodoitem] = useState(todoitemss); // useState hook to set and manage state, starting with `todoitemss`

  // Function to handle adding a new todo item to the list.
  const handletodoitem = (itemname, itemduedate) => {
    // Create a new array with the existing todo items and the new item added.
    const newtodoitem = [...todoitem, { name: itemname, duedate: itemduedate }];
    settodoitem(newtodoitem); // Update the state with the new todo list (adding the new item).
  };

  // Function to handle deleting a todo item from the list based on its name.
  const handledeleteitem = (todoitemname) => {
    // Filter the current todo items to exclude the item with the name matching `todoitemname`.
    const newTodoitems = todoitem.filter((item) => item.name !== todoitemname); 
    settodoitem(newTodoitems); // Update the state with the new list after removing the item.
    console.log(`item deleted: ${todoitemname}`); // Log the name of the deleted item to the console.
  };

  return (
    <>
      <div className="container">  {/* Main container to wrap the app content */}
        <Appname />  {/* Display the app's name or title using the Appname component */}
        <Addtodo onnewitem={handletodoitem} />  {/* Render the Addtodo component, passing the `handletodoitem` function to add new items */}
        
        {/* If the `todoitem` state is empty (no todo items), show the welcome message */}
        {todoitem.length === 0 && <Wellcomemessage />}  {/* Conditional rendering for the welcome message */}
        
        {/* Render the Todoitems component, passing the current `todoitem` state and the `handledeleteitem` function for deleting items */}
        <Todoitems todoitems={todoitem} onDeleteClick={handledeleteitem} />
      </div>
    </>
  );
}

export default App;  // Export the App component to be used in other parts of the app
