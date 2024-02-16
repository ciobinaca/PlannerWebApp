package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.Task;
import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.CategoriesRepository;
import com.example.TestProiectBackend.Repository.TaskRepository;
import com.example.TestProiectBackend.Repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale.Category;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoriesServiceImplementation implements CategoriesService {
    @Autowired
    private CategoriesRepository categoriesRepository;
    @Autowired
    private UserService userServiceImplementation;

    @Override
    public List<Categories> findAll() {
        return categoriesRepository.findAll();
    }

    @Override
    public void Insert(Categories categories, long id) {
        User u=userServiceImplementation.findFirstById(id);
        u.getCategories().add(categories);
        categoriesRepository.save(categories);
    }

    @Override
    public Categories findFirstById(Long id) {
        return categoriesRepository.findFirstByCategoryId(id);
    }

    @Override
    public void Update(Categories Categories) {
         Categories category = categoriesRepository.findById(Categories.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        category.setName(Categories.getName());

    }

    @Override
    public Categories Delete(Long id, Long userId) {
        Categories categoryToDelete = categoriesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
        List<Categories> userCategories= userServiceImplementation.findById(userId).getCategories();
        for(Categories c: userCategories)
           if(c.getCategoryId()==id)
            {userCategories.remove(c);
                break;}
        categoriesRepository.deleteById(categoryToDelete.getCategoryId());
        return categoryToDelete;
    }

    @Override
    public Categories findById(Long id) {
        Optional<Categories> optionalCategory= Optional.ofNullable(categoriesRepository.findFirstByCategoryId(id));
        return optionalCategory.orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
    }
    
    @Override
    public List<Categories> readByUserId(long userId){
        User user = userServiceImplementation.findById(userId);
        return user.getCategories();
    
    }

      @Override
    public List<Categories> ReadAll() {
        return (List<Categories>) categoriesRepository.findAll();
    }
}


