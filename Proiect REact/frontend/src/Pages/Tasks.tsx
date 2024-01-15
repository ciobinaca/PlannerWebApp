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
  const [userId, setId] =useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category| null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>();

  useEffect(()=> {

    const user =  JSON.parse(localStorage.getItem("user") || "");
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
  if(userId === undefined || userId === null)
    return;
  //const storedCategoriesString=localStorage.getItem("categorii") || "[]";

  //const storedCategories: Category[] = JSON.parse(storedCategoriesString);
  ReadAllCategories();
  //setCategories(storedCategories);

},[userId])
  
  const ReadAllTasks = (category:Category) => {
    setSelectedCategory(category);
     try {
        axios.get(`http://localhost:8081/Task/ReadByCategoryId/${category.categoryId}`, {
            
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
  
  },[selectedCategory])


  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      try {
        axios.post(`http://localhost:8081/Category/Insert/${userId}`, {
          categories: newCategory,
        }).then(response => {
          // Update the local state with the new category
          setCategories([...categories, response.data]);
          setNewCategory("");
        });
      } catch (error) {
        console.error('Category creation failed', (error as Error).message);
      }
    }
  };

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
      
      <div style={{marginTop:30, padding: "60px", //overflow: "scroll" 
      }}>
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
        <Button style={loginButtonStyle } variant="contained" color="primary"//onClick={handleAddCategory} 
        >
          Add Category
        </Button>
      </div>

      {/* Right side - Tasks for the selected category */}
      <div style={{flex: 1, padding: "40px"}}>
        <h2>Tasks for {selectedCategory?.name || "All Categories"}</h2>
        <ul>
          {
          tasks.length > 0 ?
          tasks.map((task, index) => (
            <li key={index}><strong>Title:</strong> {task.title} - <strong>Description:</strong> {task.description} - <strong>Start:</strong> {JSON.stringify(task.start)} - <strong>Finish:</strong> {JSON.stringify(task.finish)} </li>
          ))
          :
          <p>No tasks yet...</p>
          }
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
