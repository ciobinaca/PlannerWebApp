package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Journal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface JournalRepository extends CrudRepository<Journal, Long> {


    Journal findFirstByJournalId(Long id);


}
