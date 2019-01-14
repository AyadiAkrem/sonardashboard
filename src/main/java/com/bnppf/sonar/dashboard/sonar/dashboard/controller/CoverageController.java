package com.bnppf.sonar.dashboard.sonar.dashboard.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class CoverageController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/coverage/{project}")
    int getCoverageOF(@PathVariable String project) {

        String component = restTemplate.getForObject(
                "https://sonarcloud.io/api/measures/component?metricKeys=coverage&componentKey="+project, String.class);
        String value = component.substring(component.indexOf("\"value\":\"")+9,component.indexOf("\",\"bestValue\""));
        return Double.valueOf(value).intValue();

    }
    // https://sonarcloud.io/api/measures/component?metricKeys=ncloc_language_distribution&componentKey=simgrid
    // https://sonarcloud.io/api/metrics/search

}
