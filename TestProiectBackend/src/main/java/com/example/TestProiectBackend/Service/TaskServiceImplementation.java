package com.example.TestProiectBackend.Service;
import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Reminder;
import com.example.TestProiectBackend.Model.Task;
import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImplementation implements TaskService{
    @Autowired
    private TaskRepository TaskRepository;
    @Autowired
    private CategoriesServiceImplementation  categoriesServiceImplementation;
    @Override
    public List<Task> findAll() {
        return (List<Task>) TaskRepository.findAll();
    }

    @Override
    public void Insert(Task Task, long categoryId) {
        Categories c=categoriesServiceImplementation.findFirstById(categoryId);
            c.getTasks().add(Task);
            TaskRepository.save(Task);
        }

    @Override
    public Task findFirstById(Long id) {
        return TaskRepository.findFirstByTaskId(id);
    }

    @Override
    public Task Update(Task Task) {
        Task task = TaskRepository.findById(Task.getTaskId())
        .orElseThrow(() -> new RuntimeException("Task not found"));

    task.setTitle(Task.getTitle());
    task.setDescription(Task.getDescription());
    task.setDueDate(Task.getDueDate());
    task.setPriority(Task.getPriority());
    task.setStatus(Task.getStatus());

return task;
    }

    @Override
    public Task Delete(Long id, long catId) {
        Task taskToDelete = TaskRepository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
List<Task> categoryTasks= categoriesServiceImplementation.findById(catId).getTasks();
for(Task c: categoryTasks)
   if(c.getTaskId()==id)
    {categoryTasks.remove(c);
        break;}
TaskRepository.deleteById(taskToDelete.getTaskId());
return taskToDelete;
    }

    @Override
    public Task findById(Long id) {
        return TaskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found: " + id));
    }

    @Override
    public List<Task> ReadAll() {
        return (List<Task>) TaskRepository.findAll();
    }

     @Override
    public List<Task> readByCategoryId(long categoryId){
        Categories cat = categoriesServiceImplementation.findById(categoryId);
            List<Task> tasks = cat.getTasks();

            return tasks;
}
}


