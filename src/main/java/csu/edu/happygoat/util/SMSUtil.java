package csu.edu.happygoat.util;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import org.json.JSONException;

import java.io.IOException;

// 短信用例
//      SMSUtil sms = new SMSUtil();
//		sms.sendSMS("18774805630");

//短信样式
//【猿仙人】1****6为您的登录验证码，请于100分钟内填写。如非本人操作，请忽略本短信。


public class SMSUtil {

    public void sendSMS(String phoneNumber) {
        // 短信应用SDK AppID     // 1400开头
        int appid = 1400138159;
        // 短信应用SDK AppKey
        String appkey = "e61deeb3e8a9b635a34a9e4bb079148e";
        // 需要发送短信的手机号码
        //phoneNumber = "18774805630";
        // 短信模板ID，需要在短信应用中申请
        int templateId = 188732 ;
        // 签名，使用的是`签名内容`，而不是`签名ID`
        String smsSign = "猿仙人";
        try {
	        //String[] params = {};//参数，验证码为5678，30秒内填写
            String[] params = {"123456","100"};//参数，验证码为123456，100秒内填写
            SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
            SmsSingleSenderResult result = ssender.sendWithParam("86", phoneNumber,
                    templateId, params, smsSign, "", "");  // 签名参数未提供或者为空时，会使用默认签名发送短信
            System.out.println(result.toString());
        }  catch (JSONException e) {
            // json解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络IO错误
            e.printStackTrace();
        }catch (Exception e) {
            // 网络IO错误
            e.printStackTrace();
        }
    }
}
