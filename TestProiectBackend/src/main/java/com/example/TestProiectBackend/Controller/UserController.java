package com.example.TestProiectBackend.Controller;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Service.UserServiceImplementation;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/User")
public class UserController {
 private final UserServiceImplementation userServiceImplementation;
 @GetMapping("/GetData")
 public String getMessage(){return "ola";}

 @PostMapping("/Print")
 public void printMessage(@RequestBody String data){
  System.out.println("yupi");
 }

 @PostMapping("/Insert")
 public ResponseEntity<String> insert(@RequestBody User user){
   userServiceImplementation.Insert(user);
  return ResponseEntity.ok("Data inserted successfully");
 }

 @GetMapping("/ReadAll")
 public ResponseEntity<List<User>> readAll(){
  List<User> users = userServiceImplementation.ReadAll();
  return ResponseEntity.status(HttpStatus.OK).body(users);
 }

 @PutMapping("/Update")
 public ResponseEntity<User> update(@RequestBody User user){
  User updatedUser = userServiceImplementation.Update(user);
  return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
 }

 @DeleteMapping("/Delete/{id}")
 public ResponseEntity<User> delete(@PathVariable("id")Long id){
  User result = userServiceImplementation.Delete(id);
  return ResponseEntity.status(HttpStatus.OK).body(result);
 }

 @PostMapping("/Login")
 public User logIn(@RequestBody User user){

//  User loggedUser = userServiceImplementation.findByUsername(user.getUsername());
 // if (user. == null) {
 User loggedUser = userServiceImplementation.findByEmail(user.getEmail());
 // }
  if (loggedUser != null && loggedUser.getPassword().equals(user.getPassword())){
   return loggedUser;
  }
  else return null;
 }

 @PostMapping("/Signup")
 public void signUp(@RequestBody User user){
     userServiceImplementation.signUp(user);
 }



}


