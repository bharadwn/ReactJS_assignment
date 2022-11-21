package com.gl.controller;

import com.gl.domain.Theaters;
import com.gl.service.TheaterService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/movies-in-theaters")
public class TheaterController {

    private TheaterService theaterService;

    public TheaterController(TheaterService theaterService) {
        this.theaterService = theaterService;
    }

    @GetMapping("/")
    public Iterable<Theaters> list() {
        return theaterService.list();
    }
    
    @GetMapping("/movie/{id}")
    public Theaters getMovie(@PathVariable String id) {
        return theaterService.findById(id);
    }
    
    @GetMapping("/movie/{title}/year/{year}")
    public Theaters getMovie(@PathVariable String title, @PathVariable String year) throws Exception {
        return theaterService.findByTitleNYear(title, year);
    }

}