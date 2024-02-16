package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long categoryId;
    private String name;
    private Integer noOfTasks;

  //  @JsonManagedReference
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    @Column(insertable=false, updatable=false)
    private List<Task> tasks;
    
  //   @JsonIgnore 
  // //  @JsonBackReference
  //   @ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
  //   @JoinColumn(name="userId")
  //   private User user;

    // public User getUser() {
    //     return user;
    // }
     
}
