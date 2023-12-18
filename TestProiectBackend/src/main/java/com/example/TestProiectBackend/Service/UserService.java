package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

    List<User> ReadAll();

    void Insert(User user);

   User findFirstById(Long id);

    User Update(User user);

    User Delete(Long id);

    User findById(Long id);

    User findByEmail(String email);

    User findByUsername(String email);
}
