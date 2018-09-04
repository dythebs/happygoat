package csu.edu.happygoat;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("csu.edu.happygoat.dao")
public class HappygoatApplication {

    public static void main(String[] args) {
        SpringApplication.run(HappygoatApplication.class, args);
    }
}
