package com.example.TestProiectBackend.Service;
import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Task;
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

    @Override
    public List<Task> findAll() {
        return (List<Task>) TaskRepository.findAll();
    }

    @Override
    public void Insert(Task Task) {
        TaskRepository.save(Task);
    }

    @Override
    public Task findFirstById(Long id) {
        return TaskRepository.findFirstByTaskId(id);
    }

    @Override
    public Task Update(Task Task) {
        return TaskRepository.save(Task);
    }

    @Override
    public Task Delete(Long id) {
        Task bookingToDelete = TaskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));

        TaskRepository.delete(bookingToDelete);
        return bookingToDelete;
    }

    @Override
    public Task findById(Long id) {
        return TaskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));
    }

     @Override
    public List<Task> readByCategoryId(long categoryId){
        List<Task> tasks=findAll();
        List<Task> filteredTasks=new ArrayList<Task>();
      for (Task t: tasks) {
        if(t.getCategories().getCategoryId()==categoryId)
          filteredTasks.add(t);
      }
      return filteredTasks;
    
    }

}


