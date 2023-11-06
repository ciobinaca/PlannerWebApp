package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {

   void Insert(User user);

   User findFirstById(Long id);

}
