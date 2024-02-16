package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Task;
import com.example.TestProiectBackend.Service.CategoriesServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Category")
public class CategoriesController {
    private final CategoriesServiceImplementation categoriesServiceImplementation;
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
    public ResponseEntity<String> insert(@RequestBody Categories category, @PathVariable("id") long id){
         Categories c = category;
         c.setName(category.getName());
        categoriesServiceImplementation.Insert(c,id);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity readAll(){
        List<Categories> Categories = categoriesServiceImplementation.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(Categories);
    }
    
    @GetMapping("/ReadByUserId/{id}")
    public List<Categories> ReadByUserId(@PathVariable("id") Long id){
        List<Categories> Categories = categoriesServiceImplementation.readByUserId(id);
        return Categories;
    }

    @PutMapping("/Update")
    public void update(@RequestBody Categories Categories){
       categoriesServiceImplementation.Update(Categories);
       
    }

    @DeleteMapping("/Delete/{id}/{user}")
    public ResponseEntity<Categories> delete(@PathVariable("id")Long id, @PathVariable("user")Long userId){
        Categories result = categoriesServiceImplementation.Delete(id,userId);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


}


