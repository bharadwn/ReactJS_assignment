package com.gl.controller;
import com.gl.domain.Soon;
import com.gl.service.SoonService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/movies-coming")
public class SoonController {

    private SoonService soonService;

    public SoonController(SoonService soonService) {
        this.soonService = soonService;
    }

    @GetMapping("/")
    public Iterable<Soon> list() {
        return soonService.list();
    }

    @GetMapping("/movie/{id}")
    public Soon getMovie(@PathVariable String id) {
        return soonService.findById(id);
    }
    
    @GetMapping("/movie/{title}/year/{year}")
    public Soon getMovie(@PathVariable String title, @PathVariable String year) throws Exception {
        return soonService.findByTitleNYear(title, year);
    }
}