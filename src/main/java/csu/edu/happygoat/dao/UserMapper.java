package csu.edu.happygoat.dao;

import csu.edu.happygoat.domain.User;

public interface UserMapper {
    User getUserByUsername(String username);
}
