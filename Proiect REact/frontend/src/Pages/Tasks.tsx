import React, { useState, useEffect } from "react";
import { Button, TextField, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { loginButtonStyle, parentDivStyle } from "./Login.styles";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import axios from 'axios';
import { forEachChild } from "typescript";
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskRounded } from "@mui/icons-material";

interface Category {
  categoryId: number;
  name: string;
  userId: number;
}

interface Task {
  taskId:number
  priority:number;
  title: string;
  description: string;
  status:string;
  dueDate:Date;
  }

  interface Reminder {
    title: string;
    dueDate: Date;
  }


const Tasks = (): JSX.Element => {
  const [userId, setId] =useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category| null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskStatus, setTaskStatus] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<number | null>(null);
  const [taskDue, setTaskDue] = useState<Date | null>();
  //const[selectedTask, setSelectedTask] = useState<Task| null>(null);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  
  const handleDueDateChange = (date: Date | null) => {
    setTaskDue(date);
  };


  useEffect(()=> {

    const user = JSON.parse(localStorage.getItem("user") || "");
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
      
      // const approachingDate = new Date(taskDue.getTime() - 24 * 60 * 60 * 1000); // 1 day before
      // const currentDate = new Date();

      // if (currentDate < approachingDate) {
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

},[userId])
  
  const ReadAllTasks = (category:Category) => {
    setSelectedCategory(category);
   if (category!=null)
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

  const DeleteCategory = (category:Category) => {
    setSelectedCategory(category);
     try {
        axios.delete(`http://localhost:8081/Category/Delete/${category.categoryId}/${userId}`, {
            
        }).then(response=> { 
          setCategories(currentCategories => currentCategories.filter(c => c.categoryId !== category.categoryId));
        })
             

    } catch (error) {
        console.error('Import failed', (error as Error).message);
    }
   
  };

  const DeleteTask = (task: Task) => {
    try {
      axios.delete(`http://localhost:8081/Task/Delete/${task.taskId}/${selectedCategory?.categoryId}`, {
      }).then((response) => { 
        setTasks(currentTasks => currentTasks.filter(t => t.taskId !== task.taskId));
      });
    } catch (error) {
      console.error('Task deletion failed', (error as Error).message);
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
        axios.post(`http://localhost:8081/Category/Insert/${userId}`,{
            name:newCategory
        }).then(response => {
          // Update the local state with the new category
          //setNewCategory("");
          
          setCategories([...categories, response.data]);
          
        });
      } catch (error) {
        console.error('Category creation failed', (error as Error).message);
      }
    }
  };

  const handleAddTask = () => {
   // if (.trim() !== "") {

      try { 
        axios.post(`http://localhost:8081/Task/Insert/${selectedCategory?.categoryId}`,{
            title:taskName,
            description: taskDescription,
            dueDate: taskDue,
            priority: taskPriority,
            status: taskStatus
        }).then(response => {
          setTasks(tasks=>[...tasks, response.data])
          
          if (taskDue) {
            setReminders(prevReminders => [
              ...prevReminders,
              {
                title: taskName,
                dueDate: taskDue,
              },
            ]);
          }
    
          // Reset task input fields
          setTaskName("");
          setTaskPriority(null);
          setTaskDescription("");
          setTaskStatus("");
          setTaskDue(null);
          
        });
      } catch (error) {
        console.error('Category creation failed', (error as Error).message);
      }
    }

    const handleUpdateTask = (task: Task) => {
      try {
        axios.put(`http://localhost:8081/Task/Update`, {
          title: taskName,
          description: taskDescription,
          status: taskStatus,
          priority: taskPriority,
          //dueDate: DueDate,
        }).then(response => {
          localStorage.setItem("tasks", JSON.stringify(response.data));
          setTasks([...tasks, response.data]);
          console.log('Update successful', response.data);
        });
      } catch (error) {
        console.error('Update failed', (error as Error).message);
      } finally {
       // setEditedTaskId(null);
      }
    };
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
      
      <div style={{marginTop:50, padding: "50px" 
      }}>
        <List  style={{height: 300, overflow: "auto"}}>
          { categories.map((category) => (
            <ListItem
              key={category.name}
              button
              selected={selectedCategory === category}
              onClick={() => ReadAllTasks(category)}
            >
              <ListItemText primary={category.name} />
              <IconButton edge="end" aria-label="delete" onClick={() => DeleteCategory(category)}
              >
            <DeleteIcon />
          </IconButton>
            </ListItem>
          ))}
        </List>
        <TextField
          label="New Category"
          variant="outlined"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button style={loginButtonStyle } variant="contained" color="primary" onClick={handleAddCategory} 
        >
          Add Category
        </Button>
      </div>

      {/* Right side - Tasks for the selected category */}
      <div style={{flex: 1, padding: "60px"}}>
        <h2>Tasks for {selectedCategory?.name }</h2>
        <List  style={{height: 150,  overflow: "auto"}}>
          {
          tasks.length > 0 ?
          tasks.map((task, index) => (
            <li key={index}><strong> {task.title}</strong> -  {task.description} 
             <strong>  Due: </strong>{task.dueDate ? new Date(task.dueDate).toDateString() : 'No due date'}   
             <button color="primary" style={{ marginTop: 10, left:10 }} onClick={() => handleUpdateTask(task)}>Update Task</button>
               <IconButton edge="end" aria-label="delete"
               onClick={() =>DeleteTask(task)
               } 
              >
            <DeleteIcon />
          </IconButton>
           </li>
             
          ))
          :
          <p>No tasks yet...</p>
          }
        </List>
        {/* <div  style={{marginTop:30}}> */}
        <TextField 
          label="New Task"
          variant="outlined"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
          <TextField
        label="New Task Priority"
        variant="outlined"
        value={taskPriority}
        onChange={(e) => setTaskPriority(parseInt(e.target.value))}
      />
      <TextField
        label="New Task Description"
        variant="outlined"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <TextField
        label="New Task Status"
        variant="outlined"
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
      />
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Due date" 
          value={taskDue}
         onChange={handleDueDateChange}
        />
    </LocalizationProvider>
        <Button variant="contained" color="primary" style={{...loginButtonStyle, marginTop: 10, left:10 }}  onClick={handleAddTask}
        >
          Add Task
        </Button>
        </div>
       
      </div>
    // </div>
  );
};

export default Tasks;
