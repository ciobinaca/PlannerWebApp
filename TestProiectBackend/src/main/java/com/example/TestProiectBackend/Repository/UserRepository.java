package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    void Insert(User user);
    User findFirstById(Long id);


}
