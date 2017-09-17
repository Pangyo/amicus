package org.pangyo.amicus.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by gwiyeong on 2017. 9. 17..
 */
@Configuration
public class StaticResourceConfig extends WebMvcConfigurerAdapter {

    @Value("${static.resource.location}")
    private String staticResouceLocation;



    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations(staticResouceLocation);
    }
}

