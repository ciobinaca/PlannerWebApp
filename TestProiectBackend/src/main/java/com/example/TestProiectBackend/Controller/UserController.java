package com.example.TestProiectBackend.Controller;


import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Service.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@RequiredArgsConstructor
@RestController
@CrossOrigin



public class UserController {
 private final UserServiceImplementation usersi;
 @GetMapping("/GetData")
 public String getMessage(){return "ola";}

 @PostMapping("/Print")
 public void printMessage(@RequestBody String data){
  System.out.println("yupi");
 }
// @PostMapping("/Insert")
 //public void insert(@RequestBody User user){
 //  usersi.Insert(user);
 //}


}
