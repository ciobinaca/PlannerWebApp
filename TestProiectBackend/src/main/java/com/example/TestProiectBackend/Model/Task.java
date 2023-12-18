package com.example.TestProiectBackend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;


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
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer priority;
    private String status;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="categoryId")
    private Categories categories;
    @OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Reminder> reminders;

}
