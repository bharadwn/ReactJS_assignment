package com.gl.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.gl.domain.Theaters;
import com.gl.repository.TheaterRepository;

@Service
public class TheaterService {
	 private final TheaterRepository theaterRepository;

	    public TheaterService(TheaterRepository theaterRepository) {
	        this.theaterRepository = theaterRepository;
	    }

	    public Iterable<Theaters> list() {
	        return theaterRepository.findAll();
	    }

	    public Theaters save(Theaters theater) {
	        return theaterRepository.save(theater);
	    }

	    public void save(List<Theaters> theaters) {
	    	theaterRepository.saveAll(theaters);
	    }

		public Theaters findById(String id) {
			return theaterRepository.findById(id).get();
		}		

		public Theaters findByTitleNYear(String title, String year) throws Exception {
			List<Theaters> movies1 = theaterRepository.findByTitleIgnoreCase(title);
	    	List<Theaters> movies2 = theaterRepository.findByTitleIgnoreCase(title.trim()+" ");
	    	List<Theaters> matchingMovies = movies1;
	    	matchingMovies.addAll(movies2);
	    	if (matchingMovies.size()>=1) {
	    		System.out.println("Found Matching delete movies");
	    		for (Theaters mmovie:matchingMovies) {
	    			System.out.println(" "+mmovie);
	    			if (mmovie.getYear().equals(year)) {	    				
	    				return mmovie;
	    			} 
	    		}    
	    	}
	    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
		}   
    	
}
