package csu.edu.happygoat.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import csu.edu.happygoat.service.DetailService;
import csu.edu.happygoat.util.UrlUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.rmi.CORBA.Util;

@RestController
@CrossOrigin
public class DetailController {
    @Autowired
    DetailService detailService;

    @GetMapping("/detail/hunlicehua/{url}")
    public String detailHunlicehua(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        String content = detailService.getHunlicehuaData(url);
        JSONObject jsonObject = JSONObject.parseObject(content);
        return jsonObject.getString("content");
    }

    @GetMapping("/detail/hunyanjiudian/{url}")
    public String detailHunyanjiudian(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        String content = detailService.getHunyanjiudianData(url);
        JSONObject jsonObject = JSONObject.parseObject(content);
        return jsonObject.getString("content");
    }

    @GetMapping("/detail/hunshasheying/{url}")
    public String detailHunshasheying(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        String content = detailService.getHunshasheyingData(url);
        JSONObject jsonObject = JSONObject.parseObject(content);
        return jsonObject.getString("content");
    }

    @GetMapping("/detail/miyue/{url}")
    public String detailMiyue(@PathVariable("url") String url) {
        url = UrlUtil.trimUrl(url);
        String content = detailService.getMiyueData(url);
        JSONObject jsonObject = JSONObject.parseObject(content);
        return jsonObject.getString("content");
    }

}
