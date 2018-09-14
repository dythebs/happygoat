package csu.edu.happygoat.controller;

import csu.edu.happygoat.annotation.AuthToken;
import csu.edu.happygoat.dao.UserMapper;
import csu.edu.happygoat.domain.User;
import csu.edu.happygoat.util.*;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    UserMapper userMapper;

    @Autowired
    Md5TokenGenerator tokenGenerator;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    @AuthToken
    public ResponseTemplate login(@RequestBody(required = false) String userInfo){
        System.out.println(userInfo);
        JSONObject object = JSONObject.parseObject(userInfo);
        String username = object.getString("username");
        String password = object.getString("password");
        User curentUser = userMapper.getUserByUsername(username);
        JSONObject result = new JSONObject();
        if(curentUser != null){
            Jedis jedis = RedisPool.getJedis();
            String token = tokenGenerator.generate(username, password);
            jedis.set(username, token);
            jedis.expire(username, Constrant.TOKEN_EXPIRE_TIME);
            jedis.set(token, username);
            jedis.expire(token, Constrant.TOKEN_EXPIRE_TIME);
            Long currentTime = System.currentTimeMillis();
            jedis.set(token + username, currentTime.toString());
            jedis.close();
            result.put("status", "success");
            result.put("token", token);
        }else {
            result.put("status", "failed");
        }
        return new ResponseTemplate(200,"Success",result);
    }


    @RequestMapping(value = "test", method = RequestMethod.GET)
    @AuthToken
    public ResponseTemplate test(){
        User user = new User();
        return new ResponseTemplate(200,"Success",user);
    }
}
