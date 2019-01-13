package com.bnppf.sonar.dashboard.sonar.dashboard.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CoverageController {

    private static Map<String, Integer> coverage = new HashMap();
    static {
        coverage.put("GMIA-ap50",45);
        coverage.put("SGIA-ap50",50);
    }

    @GetMapping("/coverage/{project}")
     Integer getCoverageOF(@PathVariable String project) {
        return coverage.get(project);
    }

}
