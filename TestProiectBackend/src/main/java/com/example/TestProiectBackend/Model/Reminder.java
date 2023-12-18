package com.example.TestProiectBackend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reminderId;
    private LocalDateTime startDate;
    private String descriereMemento;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="taskId")
    private Task task;

}
