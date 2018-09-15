package csu.edu.happygoat.dao;

import csu.edu.happygoat.domain.User;

public interface UserMapper {
    User getAccountByPhone(String phonenumber);
    void insertAccount(User user);
    void insertSignon(User user);
    void updateAccount(User user);
}
