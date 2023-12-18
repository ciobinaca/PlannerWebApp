package com.example.TestProiectBackend.Controller;


import com.example.TestProiectBackend.Model.Reminder;
import com.example.TestProiectBackend.Service.ReminderServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin


@RequestMapping("/Reminder")
public class ReminderController {
    private final ReminderServiceImplementation reminderServiceImplementation;
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
    public ResponseEntity<String> insert(@RequestBody Reminder Reminder){
        reminderServiceImplementation.Insert(Reminder);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Reminder>> readAll(){
        List<Reminder> Reminders = reminderServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(Reminders);
    }

    @PutMapping("/Update")
    public ResponseEntity<Reminder> update(@RequestBody Reminder Reminder){
        Reminder updatedReminder = reminderServiceImplementation.Update(Reminder);
        return ResponseEntity.status(HttpStatus.OK).body(updatedReminder);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Reminder> delete(@PathVariable("id")Long id){
        Reminder result = reminderServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}


