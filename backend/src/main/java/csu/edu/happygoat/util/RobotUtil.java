package csu.edu.happygoat.util;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class RobotUtil {
    public String getReplyFromRobot(String text) throws JSONException, ClientProtocolException, IOException {
        String url = "http://www.tuling123.com/openapi/api?key=";//设置访问接口地址
        CloseableHttpClient httpClient = HttpClients.createDefault();//创建并实例化连接
        JSONObject jsonObject = new JSONObject();//创建并实例化jsonobject
        jsonObject.put("key", "b053e63905ad4405a28ff9c0790a872d");//输入key
        jsonObject.put("info", text);//输入信息
//	    jsonObject.put("loc", "北京市中关村");//设置地点
        String key = "b053e63905ad4405a28ff9c0790a872d";
        jsonObject.put("userid", "915b34e41cb351c0371");//设置用户id
        // String arguments = jsonObject.toString();//将json数据转化为参数
        //    System.out.println(arguments);
        HttpPost httpPost = new HttpPost(url+key+"&info="+text);//请求post接口
        HttpResponse response = httpClient.execute(httpPost);//获取响应
        InputStream inputStream = response.getEntity().getContent();//创建并实例化字节输入流，使用响应实体作为输入流
        InputStreamReader reader = new InputStreamReader(inputStream, "utf-8");//创建并实例化字符输入流，并设置编码格式
        StringBuffer buffer = new StringBuffer(" ");//创建并实例化stringbuffer，存放响应信息
        char[] buff = new char[512];//创建并实例化字符数组
        int length = 0;//声明变量length，表示读取长度
        while ((length = reader.read(buff)) != -1) {//循环读取字符输入流
            String x = new String(buff, 0, length);//获取读取到的有效内容
            buffer.append(x);//将读取到的内容添加到stringbuffer中
        }
        JSONObject dsa = new JSONObject(buffer.toString().trim());//将响应结果转化为jsonobject
        String message = "";
        message = dsa.getString("text");//获取返回消息
        return message;//返回消息
    }

}
