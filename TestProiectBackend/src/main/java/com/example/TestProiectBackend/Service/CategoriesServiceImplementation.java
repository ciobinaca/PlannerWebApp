package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.Categories;
import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.CategoriesRepository;
import com.example.TestProiectBackend.Repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoriesServiceImplementation implements CategoriesService {
    @Autowired
    private CategoriesRepository categoriesRepository;
    private UserRepository userRepository;

    @Override
    public List<Categories> findAll() {
        return categoriesRepository.findAll();
    }

    @Override
    public void Insert(Categories categories, long id) {
        categories.setUser(userRepository.findFirstById(id));
        categoriesRepository.save(categories);
    }

    @Override
    public Categories findFirstById(Long id) {
        return categoriesRepository.findFirstByCategoryId(id);
    }

    @Override
    public Categories Update(Categories Categories) {
        return categoriesRepository.save(Categories);
    }

    @Override
    public Categories Delete(Long id) {
        Categories categoriesToDelete = categoriesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));

        categoriesRepository.delete(categoriesToDelete);
        return categoriesToDelete;
    }

    @Override
    public Categories findById(Long id) {
        Optional<Categories> optionalCategory= Optional.ofNullable(categoriesRepository.findFirstByCategoryId(id));
        return optionalCategory.orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
    }
    
    @Override
    public List<Categories> readByUserId(long userId){
        List<Categories> categories=findAll();
        List<Categories> filteredCategories=new ArrayList<Categories>();
      for (Categories c : categories) {
        if(c.getUser().getId()==userId)
          filteredCategories.add(c);
      }
      return filteredCategories;
    
    }
}


