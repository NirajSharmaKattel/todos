import { useState } from "react";
function generateId(){
    Math.floor(Math.random()*100)
}
function Sikum() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const handlethechange = () => { setTodos((todos)=>todos.concat({text: input, id:generateId(),}))}
    const removeTodo = (id) => {setTodos((todos.filter((t)=> (t.id!==id))))};  
    
  return (
    <>
      <div className="container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your name"/>
        <button onClick={handlethechange}>Submit</button>
        { todos.map(({id,text})=>(
            <ul>
                <li key={id} className="todos"> 
                <span>{text}</span>
                <button className="close" onClick={()=>removeTodo()}>X</button>
                </li>




            </ul>
        ))




        }
      </div>
    </>
  )
}

export default Sikum;
