package com.example.TestProiectBackend.Controller;


import com.example.TestProiectBackend.Model.Task;
import com.example.TestProiectBackend.Service.TaskServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin


@RequestMapping("/Task")
public class TaskController {
    private final TaskServiceImplementation taskServiceImplementation;
    @GetMapping("/GetData")
    public String getMessage(){return "ola";}

    @PostMapping("/Print")
    public void printMessage(@RequestBody String data){
        System.out.println("yupi");
    }

    @GetMapping("/ReadData")
    public String getData() {
        return "ok";
    }

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody Task Task){
        taskServiceImplementation.Insert(Task);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Task>> readAll(){
        List<Task> Tasks = taskServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(Tasks);
    }

    @PutMapping("/Update")
    public ResponseEntity<Task> update(@RequestBody Task Task){
        Task updatedTask = taskServiceImplementation.Update(Task);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Task> delete(@PathVariable("id")Long id){
        Task result = taskServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


}



