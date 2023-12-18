package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
//@Data
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long categoryId;
    private String name;
    private Integer noOfTasks;

    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    @Column(insertable=false, updatable=false)
    private List<Task> tasks;

}
