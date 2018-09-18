package csu.edu.happygoat.controller;

import csu.edu.happygoat.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class StoryController {

    @Autowired
    StoryService storyService;

    @GetMapping("/story")
    public String getStory() {
        return storyService.getStory();
    }
}
