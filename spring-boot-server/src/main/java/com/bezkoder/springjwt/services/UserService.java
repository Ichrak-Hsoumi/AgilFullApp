package com.bezkoder.springjwt.services;

import com.bezkoder.springjwt.models.User;

import java.util.List;

public interface UserService {
    void createUser(User user);
    User findById(Long id);
    List<User> getAll();
    void updateUser(Long id, User user);
    public void delete(Long id);
}
