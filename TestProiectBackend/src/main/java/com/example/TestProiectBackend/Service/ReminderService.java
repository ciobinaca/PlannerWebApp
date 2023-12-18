package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Reminder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ReminderService {

    List<Reminder> ReadAll();

    void Insert(Reminder Reminder);

    Reminder findFirstById(Long id);

    Reminder Update(Reminder Reminder);

    Reminder Delete(Long id);

    Reminder findById(Long id);
}
