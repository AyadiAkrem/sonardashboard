package com.bnppf.sonar.dashboard.sonar.dashboard.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainDashboardController {

    @RequestMapping("/home")
    public String dashboard(Model model) {
        return "home";
    }
}
