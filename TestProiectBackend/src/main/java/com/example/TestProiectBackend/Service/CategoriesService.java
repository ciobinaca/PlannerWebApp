package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CategoriesService {

    public List<Categories> ReadAll();

    List<Categories> findAll();

    List<Categories> readByUserId(long userId);
    
    void Insert(Categories categories, long id);

    Categories findFirstById(Long id);

   void Update(Categories Categories);

    Categories Delete(Long id, Long UserId);

    Categories findById(Long id);

}
