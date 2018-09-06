package csu.edu.happygoat.util;

import java.io.UnsupportedEncodingException;

public class UrlUtil {
    public static String trimUrl(String url) {
        url = url.replaceAll("~", "%");
        try {
            url = java.net.URLDecoder.decode(url, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return url;
    }
}
