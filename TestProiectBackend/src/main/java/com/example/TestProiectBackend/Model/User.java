package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String username;
    private String email;
    private String password;
    private Boolean admin;

  // @JsonManagedReference
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL, orphanRemoval = true)
    private List<Categories> categories;
    
   // @JsonManagedReference
   @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Reminder> reminders;

   // @JsonManagedReference
   @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Journal> journals;

}
