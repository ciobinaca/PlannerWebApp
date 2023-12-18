package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Reminder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface ReminderRepository extends CrudRepository<Reminder, Long> {


    Reminder findFirstByReminderId(Long id);


}
