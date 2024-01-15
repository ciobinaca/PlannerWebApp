package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Task;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface TaskService {

    List<Task> findAll();

    void Insert(Task Task);

    Task findFirstById(Long id);

    Task Update(Task Task);
    
    List<Task> readByCategoryId(long categoryId);

    Task Delete(Long id);

    Task findById(Long id);
}
