package csu.edu.happygoat.util;

public class ResponseTemplate {
    public int code;
    public String message;
    public Object data;
    public ResponseTemplate(int code,String message,Object data){
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public ResponseTemplate(int code,String message){
        this.code = code;
        this.message = message;
        this.data = "";
    }
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
