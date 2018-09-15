package csu.edu.happygoat.domain;

public class User {
    private long user_id;
    private String user_name;
    private String user_password;
    private String user_nickname;
    private String user_sex;
    private String user_city;
    private String user_realname;
    private String user_address;
    private String user_zip;
    private String user_phone;
    private String user_qq;
    private String user_wechat;
    private String user_headimg;

    public User(){
        user_name = "无";
        user_password = "无";
        user_city = "无";
        user_sex = "无";
        user_phone = "无";
    }
    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_nickname() {
        return user_nickname;
    }

    public void setUser_nickname(String user_nickname) {
        this.user_nickname = user_nickname;
    }

    public String getUser_sex() {
        return user_sex;
    }

    public void setUser_sex(String user_sex) {
        this.user_sex = user_sex;
    }

    public String getUser_city() {
        return user_city;
    }

    public void setUser_city(String user_city) {
        this.user_city = user_city;
    }

    public String getUser_realname() {
        return user_realname;
    }

    public void setUser_realname(String user_realname) {
        this.user_realname = user_realname;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_zip() {
        return user_zip;
    }

    public void setUser_zip(String user_zip) {
        this.user_zip = user_zip;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
    }

    public String getUser_qq() {
        return user_qq;
    }

    public void setUser_qq(String user_qq) {
        this.user_qq = user_qq;
    }

    public String getUser_wechat() {
        return user_wechat;
    }

    public void setUser_wechat(String user_wechat) {
        this.user_wechat = user_wechat;
    }

    public String getUser_headimg() {
        return user_headimg;
    }

    public void setUser_headimg(String user_headimg) {
        this.user_headimg = user_headimg;
    }
}
