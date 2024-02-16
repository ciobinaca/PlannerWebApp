package com.example.TestProiectBackend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


//@SpringBootApplication
//@RequiredArgsConstructor
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long taskId;
    private String title;
    private String description;
    private LocalDateTime dueDate;
    private int priority;
    private String status;


  //   @JsonIgnore
  //  // @JsonBackReference
  //   @ManyToOne(fetch=FetchType.EAGER)
  //   @JoinColumn(name="categoryId")
  //   private Categories categories;
    

  //  @JsonManagedReference
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Reminder> reminders;
    
    


}
