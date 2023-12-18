package com.example.TestProiectBackend.Repository;

import com.example.TestProiectBackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface UserRepository extends CrudRepository<User, Long>, JpaRepository<User, Long> {


    User findFirstById(Long id);

    User findUserByEmail(String email);

    User  findUserByUsername(String username);


}
