package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll()  {
        return userService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> user = Optional.ofNullable(userService.findById(id));
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound()
                        .build());
    }

    @PostMapping
    public void createUser(@RequestBody User user) {

        userService.createUser(user);
    }

    @PutMapping("{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        Optional<User> user1 = Optional.ofNullable(userService.findById(id));
        if (user1.isPresent()) {
            userService.updateUser(id, user);
        } else {
            userService.createUser(user);
        }
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }

    @GetMapping(path="/current")
    public User currentUser() {
        System.out.println("\n \n I m hereeeeeeeee*****");
        User user = userService.currentUser();
        return user;
    }
}
