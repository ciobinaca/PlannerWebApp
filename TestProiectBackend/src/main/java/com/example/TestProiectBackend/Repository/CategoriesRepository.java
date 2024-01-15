package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.Categories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface CategoriesRepository extends CrudRepository<Categories, Long> {

    Categories findFirstByCategoryId(Long id);

    List<Categories> findAll();
}

