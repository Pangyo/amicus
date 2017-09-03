package org.pangyo.amicus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class AmicusApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmicusApplication.class, args);
	}
}
