package com.gl.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.gl.domain.TopIndian;
import com.gl.repository.TopIndianRepository;

@Service
public class TopIndianService {
	 private final TopIndianRepository topIndianRepository;

	    public TopIndianService(TopIndianRepository topIndianRepository) {
	        this.topIndianRepository = topIndianRepository;
	    }

	    public Iterable<TopIndian> list() {
	        return topIndianRepository.findAll();
	    }

	    public TopIndian save(TopIndian topIndian) {
	        return topIndianRepository.save(topIndian);
	    }

	    public void save(List<TopIndian> topIndians) {
	    	topIndianRepository.saveAll(topIndians);
	    }
	    
		public TopIndian findByTitleNYear(String title , String year) throws Exception {
			List<TopIndian> movies1 = topIndianRepository.findByTitleIgnoreCase(title);
	    	List<TopIndian> movies2 = topIndianRepository.findByTitleIgnoreCase(title.trim()+" ");
	    	List<TopIndian> matchingMovies = movies1;
	    	matchingMovies.addAll(movies2);
	    	if (matchingMovies.size()>=1) {
	    		System.out.println("Found Matching delete movies");
	    		for (TopIndian mmovie:matchingMovies) {
	    			System.out.println(" "+mmovie);
	    			if (mmovie.getYear().equals(year)) {	    				
	    				return mmovie;
	    			} 
	    		}    
	    	}   
	    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
		}
}
