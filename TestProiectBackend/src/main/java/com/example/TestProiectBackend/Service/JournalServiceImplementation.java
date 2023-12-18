package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Journal;
import com.example.TestProiectBackend.Repository.JournalRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JournalServiceImplementation implements JournalService{
    @Autowired
    private JournalRepository journalRepository;

    @Override
    public List<Journal> ReadAll() {
        return (List<Journal>) journalRepository.findAll();
    }

    @Override
    public void Insert(Journal Journal) {
        journalRepository.save(Journal);
    }

    @Override
    public Journal findFirstById(Long id) {
        return journalRepository.findFirstByJournalId(id);
    }

    @Override
    public Journal Update(Journal Journal) {
        return journalRepository.save(Journal);
    }

    @Override
    public Journal Delete(Long id) {
        Journal journalToDelete = journalRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Journal not found with id: " + id));

        journalRepository.delete(journalToDelete);
        return journalToDelete;
    }

    @Override
    public Journal findById(Long id) {
        Optional<Journal> optionalJournal= Optional.ofNullable( journalRepository.findFirstByJournalId(id));
               return optionalJournal.orElseThrow(() -> new EntityNotFoundException("Journal not found with id: " + id));
    }

}
