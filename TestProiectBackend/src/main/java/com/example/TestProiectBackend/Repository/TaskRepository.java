package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {


    Task findFirstByTaskId(Long id);


}
