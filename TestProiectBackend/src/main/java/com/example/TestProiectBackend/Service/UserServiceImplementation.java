package com.example.TestProiectBackend.Service;

import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository ur;
    @Override
    public void Insert(User user) {
        ur.save(user);
    }

    @Override
    public User findFirstById(Long id) {
        return ur.findFirstById(id);
    }
}
