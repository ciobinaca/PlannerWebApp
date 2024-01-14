import React, { useState, useEffect } from "react";
import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";
import { loginButtonStyle, parentDivStyle } from "./Login.styles";
import axios from 'axios';
import { forEachChild } from "typescript";

interface Category {
  categoryId: number;
  name: string;
  userId: number;
}

interface Task {
  categoryId:number
  priority:number;
  title: string;
  description: string;
  status:string;
  start:Date;
  finish:Date;

  }


const Tasks = (): JSX.Element => {
  const [userId, setId] =useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<Category| null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>();

  useEffect(()=> {

    const user =  JSON.parse(localStorage.getItem("userul") || "");
    if(user != null)
    {
        console.log(user);
       // setUserData(user);
       //console.log(userData);
        setId(user.id);
        console.log(setId);
    }
},[])

const ReadAllCategories = (): void => {
   try {
      axios.get(`http://localhost:8081/Category/ReadByUserId/${userId}`, {
      }).then(response=> { 
      localStorage.setItem("categorii", JSON.stringify(response.data));
      setCategories(response.data);
      console.log('Import succesful', response.data);
      
  });       

  } catch (error) {
      console.error('Import failed', (error as Error).message);
  }
 
};
  
useEffect(()=> {

  const storedCategoriesString=localStorage.getItem("categorii") || "[]";

  const storedCategories: Category[] = JSON.parse(storedCategoriesString);
  ReadAllCategories();
  setCategories(storedCategories);

},[])
  
  const ReadAllTasks = (category:Category) => {
    setSelectedCategory(category);
     try {
        axios.get('http://localhost:8081/Task/ReadAll', {
            
        }).then(response=> { 
        localStorage.setItem("taskulete", JSON.stringify(response.data));
        setTasks(response.data);
        console.log('Import succesful', response.data);
        
    });       

    } catch (error) {
        console.error('Import failed', (error as Error).message);
    }
   
  };

  useEffect(()=> {

    const storedTasksString=localStorage.getItem("taskulete") || "[]";

    const storedTasks: Task[] = JSON.parse(storedTasksString);
    setTasks(storedTasks);
  
  },[])

  // const handleSelectCategory = (category: number) => {

  //   setSelectedCategory(category);
  //   // Filter tasks based on the selected categoryId
  //   const tasksForCategory = tasks.filter((task) => task.categoryId === category);
  //   setTasks(tasksForCategory);
  // };

  // const handleAddCategory = () => {
  //   if (newCategory.trim() !== "") {
  //     setCategories([...categories, newCategory]);
  //     setNewCategory("");
  //   }
  // };

  // const handleAddTask = () => {
  //   if (newTask.trim() !== "") {
  //     setTasks([...tasks, newTask]);
  //     setNewTask("");
  //   }
  // };

  return (
    <div style={{ display: "flex" }}>
         <img
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",  
                    opacity: 1,  
                    zIndex:-3
                }}
                src={require('../images/jpeg.jpeg')} 
                alt="Background"
            />
      
      <div style={{marginTop:30, padding: "60px", overflow: "scroll" }}>
        <List>
          { categories.map((category) => (
            <ListItem
              key={category.name}
              button
              selected={selectedCategory === category}
              onClick={() => ReadAllTasks(category)}
            >
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
        <TextField
          label="New Category"
          variant="outlined"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button style={loginButtonStyle } variant="contained" color="primary" //onClick={handleAddCategory}
        >
          Add Category
        </Button>
      </div>

      {/* Right side - Tasks for the selected category */}
      <div style={{flex: 1, padding: "40px"}}>
        <h2>Tasks for {selectedCategory?.name || "All Categories"}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}><strong>Title:</strong> {task.title} - <strong>Description:</strong> {task.description} - <strong>Start:</strong> {JSON.stringify(task.start)} - <strong>Finish:</strong> {JSON.stringify(task.finish)} </li>
          ))}
        </ul>
        <TextField
          label="New Task"
          variant="outlined"
          value={newTask}
         // onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="primary" style={loginButtonStyle } 
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default Tasks;
