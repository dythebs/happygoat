package csu.edu.happygoat.service;

import csu.edu.happygoat.domain.User;

public interface UserService {
    User getUser(String phonenumber);
    void insert(String phonenumber);
    void update(User user);
}

