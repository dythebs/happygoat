package csu.edu.happygoat.controller;

import csu.edu.happygoat.util.ResponseTemplate;
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
    public ResponseTemplate getReply(@PathVariable("info")String info) {
        String answer = null;
        try {
            answer = robotUtil.getReplyFromRobot(info);
            JSONObject object = new JSONObject();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseTemplate(200, "success", answer);
    }
}
