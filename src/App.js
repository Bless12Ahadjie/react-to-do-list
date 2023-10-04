import React, {  useState } from 'react';
import style from './App.css'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const App = () => {
  const [todo,setTodo] = useState('')
  const [tod,setTod] = useState([])


  const renderTodo = () =>{
    setTod([...tod,todo ])
  }


  return (
    <div style={style} className='App'>
     <Box  
     style={{display:"flex",flexDirection: "column",justifyContent:"center",alignItems: "center",width: "100%"}}
     
     >
     <Typography  variant='h3'>To-Do-List</Typography>
      <TextField onChange={(e)=>{
          setTodo(e.target.value)
     }} size='small' style={{margin: "1rem"}} variant= "outlined" type='text' label="make list here" />
      <Button onClick={renderTodo}
      variant="outlined"
       style={{color: "#000",border: "1px solid #000",textTransform: "capitalize",width: "219px",marginBottom: "1rem"}}>
        Add
        </Button>
 
        <ul style={{listStyle:"none"}}>
          {
          tod.map( item => 
          <Card style={{marginBottom:"1rem",width: "219px",marginLeft:'-2.5rem'}}>
            <CardContent >
              {item}
             
            </CardContent>
            <Button size='small'
              variant="text" color="error"
              style={{textTransform: "capitalize",width: "64px"}}>
                Delete
             </Button>
           </Card>)
          
          }
        </ul>
     </Box>
   
    </div>
  );
}

export default App;
