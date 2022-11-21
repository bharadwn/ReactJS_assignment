package com.gl.controller;

import com.gl.domain.FavouritesID;
import com.gl.service.FavIDService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/favourit")
public class FavController {

    private FavIDService favIDService;

    public FavController(FavIDService favIDService) {
        this.favIDService =favIDService;
    }

    @GetMapping("/")
    public Iterable<FavouritesID> list() {	
    	return favIDService.list();	    	
    }
    
    @PostMapping("/save") 
    public ResponseEntity<String> save(@RequestBody FavouritesID favMovie) {    	
    	FavouritesID faved = favIDService.save(favMovie);
    	return new ResponseEntity<String>(favMovie.getTitle()+favMovie.getYear(), HttpStatus.OK);		    	
    }    
    
    @DeleteMapping("/delete/{title}/{year}")
    public ResponseEntity<Void> delete (@PathVariable String title, @PathVariable String year) throws Exception{
    	System.out.println("inside delete method");  	
    	favIDService.deleteByTitleNYear(title,  year);
    	
		return ResponseEntity.noContent().build();    
    }  
    
    

    @GetMapping("/movie/{title}/year/{year}")
    public FavouritesID getMovie(@PathVariable String title, @PathVariable String year) throws Exception {
        return favIDService.findByTitleNYear(title, year);
    }
}