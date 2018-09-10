package csu.edu.happygoat.controller;

import csu.edu.happygoat.util.RobotUtil;
import csu.edu.happygoat.util.UrlUtil;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@RestController
@CrossOrigin
public class RobotController {
    RobotUtil robotUtil = new RobotUtil();

    @GetMapping("/robot/ask/{info}")
    public void searchHunlicehua(@PathVariable("info")String info,HttpServletResponse response) {
        try {
            String answer = robotUtil.getReplyFromRobot(info);
            JSONObject object = new JSONObject();
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            if (!answer.equals("")){
                object.put("answer",answer);
                out.println(object);
            }else {
                object.put("answer","error");
                out.println(object);
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
