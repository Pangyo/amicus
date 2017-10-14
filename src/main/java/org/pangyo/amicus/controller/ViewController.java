package org.pangyo.amicus.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class ViewController {

    @RequestMapping("/")
    public String home() {
        return "index";
    }

    @RequestMapping("/members")
    public String members() {
        return "members";
    }
}
