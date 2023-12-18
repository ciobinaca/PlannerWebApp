package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Journal;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface JournalService {

    List<Journal> ReadAll();

    void Insert(Journal Journal);

    Journal findFirstById(Long id);

    Journal Update(Journal Journal);

    Journal Delete(Long id);

    Journal findById(Long id);
}
