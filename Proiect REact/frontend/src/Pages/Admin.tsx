import React, { useState, useEffect } from "react";
import {Button, TextField, List, ListItem, ListItemText, IconButton, 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControlLabel, Checkbox,} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface Category {
  categoryId: number;
  name: string;
}

interface Task {
  taskId: number;
  priority: number;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
}

interface User {
  id: number;
  username: string;
  email:string;
  password:string;
  admin:Boolean;
  
}

interface Reminder {
  reminderId: number;
  userId: number;
  taskId: number;
  // other reminder properties...
}

const AdminPage = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [newTask, setNewTask] = useState<string>("");
  const [newUser, setNewUser] = useState<string>("");
  const [newReminder, setNewReminder] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editedCategoryId, setEditedCategoryId] = useState<number | null>(null);
  const [editedCategoryName, setEditedCategoryName] = useState<string>("");
  const [editedUserId, setEditedUserId] = useState<number | null>(null);
const [editedUserName, setEditedUserName] = useState<string>("");
const [editedUserEmail, setEditedUserEmail] = useState<string>("");
const [editedUserPassword, setEditedUserPassword] = useState<string>("");
const [editedUserAdmin, setEditedUserAdmin] = useState<Boolean>();
const [editedTaskId, setEditedTaskId] = useState<number | null>(null);
const [editedTaskTitle, setEditedTaskTitle] = useState<string>("");
const [editedTaskDescription, setEditedTaskDescription] = useState<string>("");
const [editedTaskStatus, setEditedTaskStatus] = useState<string>("");
const [editedTaskPriority, setEditedTaskPriority] = useState<number>(0);
const [editedTaskDueDate, setEditedTaskDueDate] = useState<Date | null>(null);
const [newUsername, setNewUsername] = useState<string>("");
const [newEmail, setNewEmail] = useState<string>("");
const [newPassword, setNewPassword] = useState<string>("");
const [isAdmin, setIsAdmin] = useState<boolean>(false); // Adjust if needed
const [newTaskTitle, setNewTaskTitle] = useState<string>("");
const [newTaskDescription, setNewTaskDescription] = useState<string>("");
const [newTaskStatus, setNewTaskStatus] = useState<string>("");
const [newTaskPriority, setNewTaskPriority] = useState<number>(1); // Default priority, adjust as needed
const [newTaskDueDate, setNewTaskDueDate] = useState<Date | null>(null);
const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);


  const ReadAllUsers=(): void =>{

    try {
        axios.get(`http://localhost:8081/User/ReadAll`, {
        }).then(response=> { 
        localStorage.setItem("userii", JSON.stringify(response.data));
        setUsers(response.data);
        console.log('Import succesful', response.data);
        
    });       
  
    } catch (error) {
        console.error('Import failed', (error as Error).message);
    }
   

  }

  const ReadAllCategories = (): void => {

    try {
       axios.get(`http://localhost:8081/Category/ReadAll`, {
       }).then(response=> { 
       localStorage.setItem("categorii", JSON.stringify(response.data));
       setCategories(response.data);
       console.log('Import succesful', response.data);
       
   });       
 
   } catch (error) {
       console.error('Import failed', (error as Error).message);
   }
  
 };

   const ReadAllTasks = (): void => {

    try {
       axios.get(`http://localhost:8081/Task/ReadAll`, {
       }).then(response=> { 
       localStorage.setItem("tasks", JSON.stringify(response.data));
       setTasks(response.data);
       console.log('Import succesful', response.data);
       
   });       
 
   } catch (error) {
       console.error('Import failed', (error as Error).message);
   }
  
 };

 const handleDeleteCategory = (category:Category) => {
    
     try {
        axios.delete(`http://localhost:8081/Category/Delete/${category.categoryId}/${selectedUser?.id}`, {
            
        }).then(response=> { 
          setCategories(currentCategories => currentCategories.filter(c => c.categoryId !== category.categoryId));
        })
             

    } catch (error) {
        console.error('Import failed', (error as Error).message);
    }
   
  };


    const handleAddCategory = () => {
        try {
          axios.post(`http://localhost:8081/Category/Insert/${selectedUser?.id}`, {
            name: newCategory
          }).then((response) => {
            localStorage.setItem("categorii", JSON.stringify(response.data));
            setCategories([...categories, response.data]);
            console.log('Category added successfully', response.data);
          });
        } catch (error) {
          console.error('Category creation failed', (error as Error).message);
        }
      };
  

    const handleAddTask = () => {
        try {
          axios.post(`http://localhost:8081/Task/Insert/${selectedCategory}`, {
            title: newTaskTitle,
            description: newTaskDescription,
            status: newTaskStatus,
            priority: newTaskPriority,
            dueDate: newTaskDueDate,
          }).then((response) => {
            localStorage.setItem("tasks", JSON.stringify(response.data));
            setTasks([...tasks, response.data]);
            console.log('Task added successfully', response.data);
          });
        } catch (error) {
          console.error('Task creation failed', (error as Error).message);
        }
      };
  

  const handleAddUser = () => {
    try {
      axios.post(`http://localhost:8081/User/Insert`, {
        username: newUsername,
        email: newEmail,
        password: newPassword,
        admin: isAdmin,
        // Add other user properties if needed
      }).then(response => {
        localStorage.setItem("userii", JSON.stringify(response.data));
        setUsers([...users, response.data]);
        console.log('User added successfully', response.data);
      });
    } catch (error) {
      console.error('User add failed', (error as Error).message);
    } finally {
      // Clear the fields after adding the user
      setNewUsername("");
      setNewEmail("");
      setNewPassword("");
      setIsAdmin(false);
    }
  };
  

  const handleAddReminder = () => {
    // Implement logic for adding a new reminder
  };


  const handleDeleteTask = (task: Task) => {
    try {
      axios.delete(`http://localhost:8081/Task/Delete/${task.taskId}/${selectedCategory?.categoryId}`, {
      }).then((response) => { 
        setTasks(currentTasks => currentTasks.filter(t => t.taskId !== task.taskId));
      });
    } catch (error) {
      console.error('Task deletion failed', (error as Error).message);
    }
  };

  const handleDeleteUser = (userId: number) => {
    try {
        axios.delete(`http://localhost:8081/User/Delete/${userId}`, {
        }).then(response=> {
          setUsers(currentU => currentU.filter(c => c.id !== userId));
          console.log('User updated successfully', response.data);
        });
      } catch (error) {
        console.error('User update failed', (error as Error).message);
      }
  };

  const handleDeleteReminder = (reminderId: number) => {
    // Implement logic for deleting a reminder
  };

  const handleEditCategory = (categoryId: number) => {
    const categoryToEdit = categories.find((category) => category.categoryId === categoryId);

    if (categoryToEdit) {
      setEditedCategoryId(categoryId);
      setEditedCategoryName(categoryToEdit.name);}
    
     
  };

  const handleUpdateCategory = (categoryId: number) => {
    
      try {
        axios.put(`http://localhost:8081/Category/Update`, {
            categoryId: categoryId,
            name:editedCategoryName
        }).then(response=> { 
        localStorage.setItem("categorii", JSON.stringify(response.data));
        setCategories([...categories, response.data]);
        console.log('Import succesful', response.data);
        
    });       
  
    } catch (error) {
        console.error('Import failed', (error as Error).message);
    }
  };


  const handleEditTask = (taskId: number) => {
    const taskToEdit = tasks.find((task) => task.taskId === taskId);
  
    if (taskToEdit) {
      setEditedTaskId(taskId);
      setEditedTaskTitle(taskToEdit.title);
      setEditedTaskDescription(taskToEdit.description);
      setEditedTaskStatus(taskToEdit.status);
      setEditedTaskPriority(taskToEdit.priority);
      setEditedTaskDueDate(new Date(taskToEdit.dueDate));
    }
  };
  
  const handleUpdateTask = (taskId: number) => {
    try {
      axios.put(`http://localhost:8081/Task/Update`, {
        taskId: taskId,
        title: editedTaskTitle,
        description: editedTaskDescription,
        status: editedTaskStatus,
        priority: editedTaskPriority,
        dueDate: editedTaskDueDate?.toISOString(),
      }).then(response => {
        localStorage.setItem("tasks", JSON.stringify(response.data));
        setTasks([...tasks, response.data]);
        console.log('Update successful', response.data);
      });
    } catch (error) {
      console.error('Update failed', (error as Error).message);
    } finally {
      setEditedTaskId(null); // Reset edited task ID
    }
  };

  const handleEditUser = (userId: number) => {
    const userToEdit = users.find((user) => user.id === userId);
  
    if (userToEdit) {
      setEditedUserId(userId);
      setEditedUserName(userToEdit.username);
      setEditedUserEmail(userToEdit.email);
      setEditedUserPassword(userToEdit.password);
    }
  };

  const handleUpdateUser = (userId: number) => {
    try {
      axios.put(`http://localhost:8081/User/Update`, {
        userId: userId,
        username: editedUserName,
        email: editedUserEmail,
        password: editedUserPassword,
      }).then(response => {
        localStorage.setItem("userii", JSON.stringify(response.data));
        setUsers([...users, response.data]);
        console.log('User updated successfully', response.data);
      });
    } catch (error) {
      console.error('User update failed', (error as Error).message);
    }
  };
  const handleEditReminder = (reminderId: number) => {
   
  };

  useEffect(() => {
      
  }, [selectedUser]);

  const renderTables = (selectedUser: User | null) => { 
    if (!selectedUser) {
      return <p>Please select a user from the list.</p>;
    }
    return (
        <div>
            
       

      <TextField
        label="New Category"
        variant="outlined"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button onClick={handleAddCategory} startIcon={<AddIcon />}>
        Add Category
      </Button>

    
    </div>
    );
    
};

  return (
    <div>
      <h2>Admin Page</h2>
       
       
      <List style={{overflow: "auto"}}>
        <ListItem
          button
          selected={!selectedUser}
          onClick={() => ReadAllUsers()}
        >
          <ListItemText primary="All Users" />
          </ListItem>

          <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>UserID</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>password</TableCell>
            <TableCell>Actions</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
        <TableRow key={user.id}
                  selected={selectedUser?.id === user.id}
                  onClick={() => setSelectedUser(user)}
        >
          <TableCell>{user.id}</TableCell>
          <TableCell>
            {editedUserId === user.id ? (
              <TextField
                value={editedUserName}
                onChange={(e) => setEditedUserName(e.target.value)}
              />
            ) : (
              user.username
            )}
          </TableCell>
          <TableCell>
            {editedUserId === user.id ? (
              <TextField
                value={editedUserEmail}
                onChange={(e) => setEditedUserEmail(e.target.value)}
              />
            ) : (
              user.email
            )}
          </TableCell>
          <TableCell>
            {editedUserId === user.id ? (
              <TextField
                value={editedUserPassword}
                onChange={(e) => setEditedUserPassword(e.target.value)}
              />
            ) : (
              user.password
            )}
          </TableCell>
          {/* <TableCell>
          <FormControlLabel
    control={<Checkbox checked={editedUserAdmin} onChange={() => setEditedUserAdmin(!editedUserAdmin)} />}
    label="Admin"
  />
    </TableCell> */}
          <TableCell>
            <IconButton onClick={() => handleUpdateUser(user.id)}>
              <CheckCircleIcon />
            </IconButton>
            <IconButton onClick={() => handleEditUser(user.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteUser(user.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TextField
  label="Username"
  variant="outlined"
  value={newUsername}
  onChange={(e) => setNewUsername(e.target.value)}
/>
    </TableBody>
    
  </Table>
  <TextField
  label="Email"
  variant="outlined"
  value={newEmail}
  onChange={(e) => setNewEmail(e.target.value)}
/>
<TextField
  label="Password"
  variant="outlined"
  type="password"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
/>
<FormControlLabel
  control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
  label="Admin"
/>
<Button onClick={handleAddUser} startIcon={<AddIcon />}>
  Add User
</Button>

</TableContainer>   
    <ListItem
          button
          selected={!selectedUser}
          onClick={() => ReadAllCategories()}
        >
          <ListItemText primary="All Categories" />
          </ListItem>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.categoryId}
            selected={selectedCategory?.categoryId === category.categoryId}
            onClick={() => setSelectedCategory(category)}>
              <TableCell>{category.categoryId}</TableCell>
              <TableCell>
                  {editedCategoryId === category.categoryId ? (
                    <TextField
                      value={editedCategoryName}
                      onChange={(e) => setEditedCategoryName(e.target.value)}
                    />
                  ) : (
                    category.name
                  )}
                 </TableCell>           
              <TableCell>
              <IconButton onClick={() => handleUpdateCategory(category.categoryId)}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton onClick={() => handleEditCategory(category.categoryId)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteCategory(category)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
                   {/* Add New Category */}
     
            </TableRow>
          ))}
           <TextField
        label="New Category"
        variant="outlined"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button onClick={handleAddCategory} startIcon={<AddIcon />}>
        Add Category
      </Button>

        </TableBody>
      </Table>
    </TableContainer>
    <ListItem
          button
          selected={!selectedUser}
          onClick={() => ReadAllTasks()}
        >
          <ListItemText primary="All Tasks" />
          </ListItem>

          <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>TaskId</TableCell>
        <TableCell>Task</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Priority</TableCell>
        <TableCell>Due Date</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {tasks.map((task) => (
        <TableRow key={task.taskId}>
          <TableCell>{task.taskId}</TableCell>
          <TableCell>
            {editedTaskId === task.taskId ? (
              <TextField
                value={editedTaskTitle}
                onChange={(e) => setEditedTaskTitle(e.target.value)}
              />
            ) : (
              task.title
            )}
          </TableCell>
          <TableCell>
            {editedTaskId === task.taskId ? (
              <TextField
                value={editedTaskDescription}
                onChange={(e) => setEditedTaskDescription(e.target.value)}
              />
            ) : (
              task.description
            )}
          </TableCell>
          <TableCell>
            {editedTaskId === task.taskId ? (
              <TextField
                value={editedTaskStatus}
                onChange={(e) => setEditedTaskStatus(e.target.value)}
              />
            ) : (
              task.status
            )}
          </TableCell>
          <TableCell>
            {editedTaskId === task.taskId ? (
              <TextField
                type="number"
                value={editedTaskPriority}
                onChange={(e) => setEditedTaskPriority(Number(e.target.value))}
              />
            ) : (
              task.priority
            )}
          </TableCell>
          <TableCell>
            {editedTaskId === task.taskId ? (
              <TextField
                type="date"
                value={editedTaskDueDate?.toISOString().split("T")[0]}
                onChange={(e) => setEditedTaskDueDate(new Date(e.target.value))}
              />
            ) : (
              new Date(task.dueDate).toLocaleDateString()
            )}
          </TableCell>
          <TableCell>
            <IconButton onClick={() => handleUpdateTask(task.taskId)}>
              <CheckCircleIcon />
            </IconButton>
            <IconButton onClick={() => handleEditTask(task.taskId)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteTask(task)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  <TextField
  label="Title"
  variant="outlined"
  value={newTaskTitle}
  onChange={(e) => setNewTaskTitle(e.target.value)}
/>
<TextField
  label="Description"
  variant="outlined"
  value={newTaskDescription}
  onChange={(e) => setNewTaskDescription(e.target.value)}
/>
<TextField
  label="Status"
  variant="outlined"
  value={newTaskStatus}
  onChange={(e) => setNewTaskStatus(e.target.value)}
/>
<TextField
  type="number"
  label="Priority"
  variant="outlined"
  value={newTaskPriority}
  onChange={(e) => setNewTaskPriority(Number(e.target.value))}
/>
<TextField
  type="date"
  label="Due Date"
  variant="outlined"
  value={newTaskDueDate?.toISOString().split("T")[0] || ""}
  onChange={(e) => setNewTaskDueDate(new Date(e.target.value))}
/>
<Button onClick={handleAddTask} startIcon={<AddIcon />}>
  Add Task
</Button>
</TableContainer>

      </List>
    </div>
  );
};

export default AdminPage;