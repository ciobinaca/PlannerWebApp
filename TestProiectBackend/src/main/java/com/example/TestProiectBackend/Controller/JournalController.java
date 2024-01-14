package com.example.TestProiectBackend.Controller;
import com.example.TestProiectBackend.Model.Journal;
import com.example.TestProiectBackend.Service.JournalServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Journal")
public class JournalController {
    private final JournalServiceImplementation journalServiceImplementation;
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
    public ResponseEntity<String> insert(@RequestBody Journal Journal){
        journalServiceImplementation.Insert(Journal);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Journal>> readAll(){
        List<Journal> Journals = journalServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(Journals);
    }

    @PutMapping("/Update")
    public ResponseEntity<Journal> update(@RequestBody Journal Journal){
        Journal updatedJournal = journalServiceImplementation.Update(Journal);
        return ResponseEntity.status(HttpStatus.OK).body(updatedJournal);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Journal> delete(@PathVariable("id")Long id){
        Journal result = journalServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
