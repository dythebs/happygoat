package csu.edu.happygoat.service.impl;

import csu.edu.happygoat.service.StoryService;
import csu.edu.happygoat.util.Constant;
import csu.edu.happygoat.util.SocketUtil;
import org.springframework.stereotype.Service;

@Service
public class StoryServiceImpl implements StoryService {

    @Override
    public String getStory() {
        return SocketUtil.getResult(Constant.HOST, Constant.SOTRY_PORT);
    }
}
