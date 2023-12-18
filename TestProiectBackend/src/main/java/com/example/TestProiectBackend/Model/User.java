package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Categories> categories;
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Reminder> reminders;
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Journal> journals;

}
