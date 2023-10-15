import React, {  useState } from 'react';
import style from './App.css'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const App = () => {
  const [todo,setTodo] = useState('');
  const [todoList,setTodoList] = useState([]);


  const activateTodo = () =>{
    const task = {
      id: todoList.length === 0? 1 :todoList[todoList.length - 1].id + 1,
      tasksName: todo,
      completed: false,
    }
    setTodoList([...todoList,task ])
    setTodo('')
  }

  const deleteTask = (id) => {
     setTodoList(todoList.filter((task) =>task.id !== id
      ))
      
  }

  const updateToDO = (id) =>{
   setTodoList( 
    todoList.map((task)=>{
      if (task.id === id){
       return{...task, completed: true}
      }
      else{
        return task
      }
       
    }))
  }


  return (
    <div style={style} className='App'>
     <Box  
     style={{display:"flex",flexDirection: "column",justifyContent:"center",alignItems: "center",width: "100%"}}
     
     >
     <Typography  variant='h3'>To-Do-List</Typography>
      <TextField onChange={(e)=>{
          setTodo(e.target.value)
     }} size='small' style={{margin: "1rem"}} variant= "outlined" type='text' label="write a task here"  />
      <Button onClick={activateTodo}
      variant="outlined"
       style={{color: "#000",border: "1px solid #000",textTransform: "capitalize",width: "219px",marginBottom: "1rem"}}>
        Add
        </Button>
 
        <ul style={{listStyle:"none"}}>
          {
          todoList.map( task => task.tasksName === ''? '':
          <Card  style={{marginBottom:"1rem",width: "219px",marginLeft:'-2.5rem',color: task.completed&& "#fff",backgroundColor: task.completed&& "#90ee90",textDecoration: task.completed&& "line-through"}}>
            <CardContent  >
              {task.tasksName}
            </CardContent>
            <Button  onClick={() => deleteTask(task.id)} 
             size='small'
              variant="text" color="error"
              style={{textTransform: "capitalize",width: "64px"}}>
                Delete
             </Button>

             <Button  onClick={()=>updateToDO(task.id)}
             variant="text" color="success"
             style={{textTransform: "capitalize",width: "64px"}}
             >done</Button>
           </Card>)
          
          }
        </ul>
     </Box>
   
    </div>
  );
}

export default App;
