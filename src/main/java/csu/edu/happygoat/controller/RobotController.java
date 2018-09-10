package csu.edu.happygoat.controller;

import csu.edu.happygoat.util.RobotUtil;
import csu.edu.happygoat.util.UrlUtil;
import javax.servlet.http.HttpServletResponse;
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
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/xml");
            PrintWriter out = response.getWriter();
            if (!answer.equals("")){
                out.println("<answer>"+answer+"</answer>");
            }else {
                out.println("<answer>error</answer>");
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
