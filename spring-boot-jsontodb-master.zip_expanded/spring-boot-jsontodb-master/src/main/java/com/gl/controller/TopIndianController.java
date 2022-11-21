package com.gl.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.domain.TopIndian;
import com.gl.service.TopIndianService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/top-rated-india")
public class TopIndianController {
	
    private TopIndianService topIndianService;

    public TopIndianController(TopIndianService topIndianService) {
        this.topIndianService = topIndianService;
    }

    @GetMapping("/")
    public Iterable<TopIndian> list() {
        return topIndianService.list();
    }

    @GetMapping("/movie/{title}/year/{year}")
    public TopIndian getMovie(@PathVariable String title, @PathVariable String year) throws Exception {
        return topIndianService.findByTitleNYear(title, year);
    }
}