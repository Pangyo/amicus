package org.pangyo.amicus.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/members")
    public String members() {
        return "members";
    }

    @RequestMapping("/projects")
    public String projects() {
        return "projects";
    }
}
