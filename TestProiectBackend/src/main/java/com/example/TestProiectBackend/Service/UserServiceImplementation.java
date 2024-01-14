package com.example.TestProiectBackend.Service;

import java.util.Optional;
import com.example.TestProiectBackend.Model.User;
import com.example.TestProiectBackend.Repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> ReadAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public void Insert(User user) {
        userRepository.save(user);
    }

    @Override
    public User findFirstById(Long id) {
        return userRepository.findFirstById(id);
    }

    @Override
    public User Update(User user) {
        return userRepository.save(user);
    }

    @Override
    public User Delete(Long id) {
        User userToDelete = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        userRepository.delete(userToDelete);
        return userToDelete;
    }

    @Override
    public User findById(Long id) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findFirstById(id));
        return optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    @Override
    public User findByEmail(String email) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findUserByEmail(email));
        return optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with email: " + email));
    }

    @Override
    public User findByUsername(String username) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findUserByUsername(username));
        return optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with email: " + username));
    }

    public void signUp(User user) {
        if (user.getEmail()!=null && userRepository.findUserByEmail(user.getEmail()) == null)
            Insert(user);
    }

}
