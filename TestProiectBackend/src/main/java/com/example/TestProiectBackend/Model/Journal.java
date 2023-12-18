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
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long journalId;
    private LocalDateTime dataZiua;
    private String notes;


}
