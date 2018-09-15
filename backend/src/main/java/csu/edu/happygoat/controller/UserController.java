package csu.edu.happygoat.controller;

import csu.edu.happygoat.annotation.AuthToken;
import csu.edu.happygoat.dao.UserMapper;
import csu.edu.happygoat.domain.User;
import csu.edu.happygoat.service.UserService;
import csu.edu.happygoat.util.*;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    Map<String,String> mp_phone = new HashMap<String,String >();

    @Autowired
    Md5TokenGenerator tokenGenerator;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    @AuthToken
    public ResponseTemplate login(@RequestBody(required = false) String userInfo){
        System.out.println(userInfo);
        JSONObject object = JSONObject.parseObject(userInfo);
        String username = object.getString("username");
        String password = object.getString("password");
        User curentUser = userService.getUser(username);
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

    @RequestMapping(value = "p_validation", method = RequestMethod.POST)
    public ResponseTemplate p_validation(@RequestBody(required = false) String userInfo){
        JSONObject object = JSONObject.parseObject(userInfo);
        String phonenumber = object.getString("phonenumber");
        int randoms = (int)((Math.random()*9+1)*1000);
        String code = Integer.toString(randoms);
        mp_phone.put(phonenumber,code);
        SMSUtil smsUtil = new SMSUtil();
        smsUtil.sendSMS(phonenumber,code);
        return new ResponseTemplate(200,"Success");
    }

    @RequestMapping(value = "regist", method = RequestMethod.POST)
    public ResponseTemplate regist(@RequestBody(required = false) String userInfo){
        JSONObject object = JSONObject.parseObject(userInfo);
        String username = object.getString("username");
        String password = object.getString("password");
        String phonenumber = object.getString("phonenumber");
        String Verification_code = object.getString("code");
        JSONObject result = new JSONObject();
        if(mp_phone.get(phonenumber).equals(Verification_code)){
            userService.insert(username,password,phonenumber);
            User user = new User();
            user.setUser_name(username);
            user.setUser_phone(phonenumber);
            return new ResponseTemplate(200,"Success",user);
        }else {
            System.out.println(mp_phone.get(phonenumber));
            result.put("status","验证码错误");
        }
        return new ResponseTemplate(400,"Success",result);
    }


    @RequestMapping(value = "test", method = RequestMethod.GET)
    @AuthToken
    public ResponseTemplate test(){
        User user = new User();
        return new ResponseTemplate(200,"Success",user);
    }
}
