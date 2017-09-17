package org.pangyo.amicus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.thymeleaf.templateresolver.FileTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

import java.net.URL;
import java.net.URLClassLoader;

@SpringBootApplication
public class AmicusApplication {

    @Autowired
    private ThymeleafProperties properties;

    @Autowired
    private Environment env;

    @Value("${spring.thymeleaf.templates.root}")
    private String templatesRoot;

    public static void main(String[] args) {

        ClassLoader cl = ClassLoader.getSystemClassLoader();

        URL[] urls = ((URLClassLoader)cl).getURLs();

        for(URL url: urls){
            System.out.println(url.getFile());
        }

        SpringApplication.run(AmicusApplication.class, args);
    }

    @Bean
    public ITemplateResolver defaultTemplateResolver() {

        FileTemplateResolver resolver = new FileTemplateResolver();
        resolver.setSuffix(properties.getSuffix());
        resolver.setPrefix(templatesRoot);
        resolver.setTemplateMode(properties.getMode());
        resolver.setCacheable(properties.isCache());
        return resolver;
    }
}
