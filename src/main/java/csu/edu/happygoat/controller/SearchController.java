package csu.edu.happygoat.controller;

import csu.edu.happygoat.service.SearchService;
import csu.edu.happygoat.util.UrlUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
@CrossOrigin
public class SearchController {
    @Autowired
    SearchService searchService;

    @GetMapping("/search/hunlicehua/{url}")
    public String searchHunlicehua(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        return searchService.getHunlicehuaData(url);
    }

    @GetMapping("/search/hunyanjiudian/{url}")
    public String searchHunyanjiudian(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        return searchService.getHunyanjiudianData(url);
    }

    @GetMapping("/search/hunshasheying/{url}")
    public String searchHunshasheying(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        return searchService.getHunshasheyingData(url);
    }

    @GetMapping("/search/miyue")
    public String searchMiyue() {
        return searchService.getMiyueData();
    }
}
