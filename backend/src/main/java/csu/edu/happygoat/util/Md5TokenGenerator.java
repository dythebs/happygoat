package csu.edu.happygoat.util;

import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class Md5TokenGenerator implements TokenGenerator{
    @Override
    public String generate(String... strings) {
        long timestamp = System.currentTimeMillis();
        String tokenMeta = "";
        for (String s : strings) {
            tokenMeta = tokenMeta + s;
        }
        tokenMeta = tokenMeta + timestamp;
        String token = DigestUtils.md5DigestAsHex(tokenMeta.getBytes());
        return token;
    }
}
