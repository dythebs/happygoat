package csu.edu.happygoat;

import csu.edu.happygoat.util.RedisPool;
import csu.edu.happygoat.util.RobotUtil;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import redis.clients.jedis.Jedis;

import java.io.IOException;

@SpringBootApplication
@MapperScan("csu.edu.happygoat.dao")
public class HappygoatApplication {

    public static void main(String[] args) {
        SpringApplication.run(HappygoatApplication.class, args);
    }
}
