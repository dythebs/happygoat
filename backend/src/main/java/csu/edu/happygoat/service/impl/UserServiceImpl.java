package csu.edu.happygoat.service.impl;

import csu.edu.happygoat.dao.UserMapper;
import csu.edu.happygoat.domain.User;
import csu.edu.happygoat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public User getUser(String username) {
        return userMapper.getUserByUsername(username);
    }


    @Override
    public void insert(String username, String password, String phonenumber) {
        User user = new User();
        user.setUser_name(username);
        user.setUser_phone(phonenumber);
        userMapper.insertAccount(user);
        userMapper.insertSignon(user);
    }
}


