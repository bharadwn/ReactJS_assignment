package com.gl.controller;

import com.gl.domain.Top;
import com.gl.service.TopService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/top-rated-movies")
public class TopController {

    private TopService topService;

    public TopController(TopService topService) {
        this.topService = topService;
    }

    @GetMapping("/")
    public Iterable<Top> list() {
        return topService.list();
    }
    
    @GetMapping("/movie/{title}/year/{year}")
    public Top getMovie(@PathVariable String title, @PathVariable String year) throws Exception {
        return topService.findByTitleNYear(title, year);
    }

}