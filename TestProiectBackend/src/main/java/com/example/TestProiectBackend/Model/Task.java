package com.example.TestProiectBackend.Model;


import com.example.TestProiectBackend.Repository.UserRepository;
import com.example.TestProiectBackend.PlannerApplication;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;


//@SpringBootApplication
//@RequiredArgsConstructor
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="Task")
public class Task {
    @Id
    private Long task_id;
    private Long user_id;
    private Long category_id;
    private String title;
    private String description;
    private Date start_date;
    private Date end_date;
    private Integer priority;
    private String status;




    //private final UserRepository userRepository;

   // public static void main(String[] args) {
   //     SpringApplication.run(PlannerApplication.class, args);
   // }


}
