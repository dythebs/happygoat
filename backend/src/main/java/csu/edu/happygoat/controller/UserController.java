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

import javax.validation.constraints.Null;
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

    //登录：需要json格式传入phonenumber，password
    @RequestMapping(value = "login", method = RequestMethod.POST)
    @AuthToken
    public ResponseTemplate login(@RequestBody(required = false) String userInfo){
        System.out.println(userInfo);
        JSONObject object = JSONObject.parseObject(userInfo);
        String phonenumber = object.getString("phonenumber");
        String password = object.getString("password");
        User curentUser = userService.getUser(phonenumber);
        JSONObject result = new JSONObject();
        if(curentUser != null){
            Jedis jedis = RedisPool.getJedis();
            String token = tokenGenerator.generate(phonenumber, password);
            jedis.set(phonenumber, token);
            jedis.expire(phonenumber, Constrant.TOKEN_EXPIRE_TIME);
            jedis.set(token, phonenumber);
            jedis.expire(token, Constrant.TOKEN_EXPIRE_TIME);
            Long currentTime = System.currentTimeMillis();
            jedis.set(token + phonenumber, currentTime.toString());
            jedis.close();
            result.put("status", "success");
            result.put("token", token);
        }else {
            result.put("status", "failed");
        }
        return new ResponseTemplate(200,"Success",result);
    }

    //手机验证：需要json格式传入phonenumber
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

    //用户注册：需要json格式传入phonenumber
    @RequestMapping(value = "regist", method = RequestMethod.POST)
    public ResponseTemplate regist(@RequestBody(required = false) String userInfo){
        JSONObject object = JSONObject.parseObject(userInfo);
        String phonenumber = object.getString("phonenumber");
        String password = object.getString("password");
        String Verification_code = object.getString("code");
        JSONObject result = new JSONObject();
        if(mp_phone.get(phonenumber).equals(Verification_code)){
            userService.insert(phonenumber);
            User user = new User();
            user.setUser_phone(phonenumber);
            user.setUser_password(password);
            return new ResponseTemplate(200,"Success",user);
        }else {
            System.out.println(mp_phone.get(phonenumber));
            result.put("status","验证码错误");
        }
        return new ResponseTemplate(400,"Success",result);
    }

    //修改个人信息：需要json格式传入除了phonenumber之外的其他信息，注册成功后应立即设置密码
    @RequestMapping(value = "edit",method = RequestMethod.POST)
    public ResponseTemplate edit(@RequestBody(required = false) String userInfo){
        JSONObject object = JSONObject.parseObject(userInfo);
        String phonenumber = object.getString("phonenumber");
        User user = new User();
        user.setUser_phone(phonenumber);
        if(object.getString("username")!=null){
            String username = object.getString("username");
            user.setUser_name(username);
        }
        if(object.getString("city")!=null){
            String city = object.getString("city");
            user.setUser_city(city);
        }
        if(object.getString("password")!=null){
            String password = object.getString("password");
            user.setUser_password(password);
        }
        userService.update(user);
        return new ResponseTemplate(200,"Success");
    }

    @RequestMapping(value = "test", method = RequestMethod.GET)
    @AuthToken
    public ResponseTemplate test(){
        User user = new User();
        return new ResponseTemplate(200,"Success",user);
    }
}
