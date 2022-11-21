package com.gl.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.gl.domain.Soon;
import com.gl.repository.SoonRepository;

@Service
public class SoonService {
	 private final SoonRepository soonRepository;

	    public SoonService(SoonRepository soonRepository) {
	        this.soonRepository = soonRepository;
	    }

	    public Iterable<Soon> list() {
	        return soonRepository.findAll();
	    }

	    public Soon save(Soon soon) {
	        return soonRepository.save(soon);
	    }

	    public void save(List<Soon> soons) {
	    	soonRepository.saveAll(soons);
	    }

		public Soon findById(String id) {
			return soonRepository.findById(id).get();
		}

		public Soon findByTitleNYear(String title, String year) throws Exception {
			List<Soon> movies1 = soonRepository.findByTitleIgnoreCase(title);
	    	List<Soon> movies2 = soonRepository.findByTitleIgnoreCase(title.trim()+" ");
	    	List<Soon> matchingMovies = movies1;
	    	matchingMovies.addAll(movies2);
	    	if (matchingMovies.size()>=1) {
	    		System.out.println("Found Matching delete movies");
	    		for (Soon mmovie:matchingMovies) {
	    			System.out.println(" "+mmovie);
	    			if (mmovie.getYear().equals(year)) {	    				
	    				return mmovie;
	    			} 
	    		}    
	    	}   
	    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
		}
}
