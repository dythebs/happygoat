package csu.edu.happygoat.service;

import csu.edu.happygoat.domain.User;

public interface UserService {
    User getUser(String username);
    void insert(String username,String password,String phonenumber);
}

