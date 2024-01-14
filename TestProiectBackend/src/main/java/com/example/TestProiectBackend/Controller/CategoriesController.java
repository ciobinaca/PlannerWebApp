package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.Categories;
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

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody Categories Categories){
        categoriesServiceImplementation.Insert(Categories);
        return ResponseEntity.ok("Data inserted successfully");
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Categories>> readAll(){
        List<Categories> Categories = categoriesServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(Categories);
    }
    
    @GetMapping("/ReadByUserId/{id}")
    public List<Categories> ReadByUserId(@PathVariable("id") Long id){
        List<Categories> Categories = categoriesServiceImplementation.readByUserId(id);
        return Categories;
    }

    @PutMapping("/Update")
    public ResponseEntity<Categories> update(@RequestBody Categories Categories){
        Categories updatedCategories = categoriesServiceImplementation.Update(Categories);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCategories);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Categories> delete(@PathVariable("id")Long id){
        Categories result = categoriesServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }


}


