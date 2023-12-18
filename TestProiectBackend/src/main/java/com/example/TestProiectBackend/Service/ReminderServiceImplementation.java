package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Reminder;
import com.example.TestProiectBackend.Repository.ReminderRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReminderServiceImplementation implements ReminderService{
    @Autowired
    private ReminderRepository reminderRepository;

    @Override
    public List<Reminder> ReadAll() {
        return (List<Reminder>) reminderRepository.findAll();
    }

    @Override
    public void Insert(Reminder Reminder) {
        reminderRepository.save(Reminder);
    }

    @Override
    public Reminder findFirstById(Long id) {
        return reminderRepository.findFirstByReminderId(id);
    }

    @Override
    public Reminder Update(Reminder Reminder) {
        return reminderRepository.save(Reminder);
    }

    @Override
    public Reminder Delete(Long id) {
        Reminder bookingToDelete = reminderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));

        reminderRepository.delete(bookingToDelete);
        return bookingToDelete;
    }

    @Override
    public Reminder findById(Long id) {
        return reminderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));
    }


}


