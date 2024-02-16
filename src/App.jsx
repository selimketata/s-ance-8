import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  // conditional rendering
  let taskList =[
    "task 1 react",
    "task 2 js",
    "task 2 js",
    "task 3 node js",
    "task 4 mongo db",
  ]
  let showLastElement = ()=>alert(taskList[taskList.length-1])

  return (
    <div>
      <Counter />
      <hr />

      <Button isDark handleClick={showLastElement}/>
      <Tasks tasks={taskList}/>
      <hr />
      <h1>Login form</h1>

      <LoginForm />
    </div>
  )
}

const Counter = ()=>{
  let [counter,setCounter] = useState(0)

  // component did mount
  useEffect(()=>{
    console.log("mounted ")
    //executi el code li theb houni
  },[])

  // component did update
  useEffect(()=>{
    console.log("raw el counter tzed wala n9os")
  },[counter])
  
  return (
    <div>
      {counter ==10 ? "barcha":""}
      <h3>{counter}</h3>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )

}





function Button({ isDark,handleClick }) {
  
  let style = { 
    background: isDark ? "white" : "black",
    color: !isDark ? "white" : "black" 
  }

  return <button onClick={handleClick} style={style}>submit</button>
}

/*function Tasks({tasks}){
  return (
    <ol>
      <li style={{border:"1px solid black"}}>{tasks[0]}</li>
      <li style={{border:"1px solid black"}}>{tasks[1]}</li>
      <li style={{border:"1px solid black"}}>{tasks[2]}</li>
      <li style={{border:"2px solid black"}}>{tasks[3]}</li>
    </ol>
  )
}*/
function Tasks({tasks}){
  return (
    <ol>
     {tasks.map((task,index)=>
        <Task key={index} task={task} lineThrough={index==3}/>
     )}
    </ol>
  )
}

function Task({task,lineThrough}){
  return <li style={{border:"1px solid orange",textDecoration:lineThrough?"line-through":""}}>{task}</li>
}


let LoginForm = ({}) =>{

  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  let handleLogin = ()=>{
    console.log(email,password)
  } 
  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword (e.target.value)
  }
  return (
    <div style={{display:"flex",flexDirection:"column", width:"50%"}}>
      <input type="email" value={email} onChange={handleEmailChange}/>
      <input type="password" value={password} onChange={handlePasswordChange}/>
      <button onClick={handleLogin}>login</button>
    </div>)
}







export default App
