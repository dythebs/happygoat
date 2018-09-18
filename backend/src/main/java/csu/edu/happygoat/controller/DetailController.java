package csu.edu.happygoat.controller;

import csu.edu.happygoat.service.DetailService;
import csu.edu.happygoat.util.UrlUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DetailController {
    @Autowired
    DetailService detailService;

    @GetMapping("/detail/hunlicehua/{url}")
    public String detailHunlicehua(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        return detailService.getHunlicehuaData(url);
    }
}
