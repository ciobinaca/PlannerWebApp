package com.example.TestProiectBackend.Controller;


import com.example.TestProiectBackend.Model.Categories;
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

    @PostMapping("/Insert/{id}")
    public ResponseEntity<String> insert(@RequestBody Task Task, @PathVariable("id") Long id){
        taskServiceImplementation.Insert(Task,id);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Task>> readAll(){
        List<Task> Tasks = taskServiceImplementation.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(Tasks);
    }
    
     
    @GetMapping("/ReadByCategoryId/{id}")
    public  List<Task> ReadByCategoryId(@PathVariable("id") Long id){
        List<Task> Tasks= taskServiceImplementation.readByCategoryId(id);
        
        return Tasks;
    }

    @PutMapping("/Update")
    public ResponseEntity<Task> update(@RequestBody Task Task){
        Task updatedTask = taskServiceImplementation.Update(Task);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }

    @DeleteMapping("/Delete/{id}/{cid}")
    public ResponseEntity<Task> delete(@PathVariable("id")Long id, @PathVariable("cid")Long cid){
        Task result = taskServiceImplementation.Delete(id, cid);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


}



