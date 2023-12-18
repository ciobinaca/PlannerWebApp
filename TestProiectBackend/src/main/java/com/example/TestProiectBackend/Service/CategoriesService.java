package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CategoriesService {

    List<Categories> ReadAll();

    void Insert(Categories Categories);

    Categories findFirstById(Long id);

    Categories Update(Categories Categories);

    Categories Delete(Long id);

    Categories findById(Long id);
}
