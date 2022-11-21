package com.gl.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.gl.domain.Top;
import com.gl.repository.TopRepository;

@Service
public class TopService {
	 private final TopRepository topRepository;

	    public TopService(TopRepository topRepository) {
	        this.topRepository = topRepository;
	    }

	    public Iterable<Top> list() {
	        return topRepository.findAll();
	    }

	    public Top save(Top top) {
	        return topRepository.save(top);
	    }

	    public void save(List<Top> tops) {
	    	topRepository.saveAll(tops);
	    }

		public Top findByTitleNYear(String title , String year) throws Exception {
			List<Top> movies1 = topRepository.findByTitleIgnoreCase(title);
	    	List<Top> movies2 = topRepository.findByTitleIgnoreCase(title.trim()+" ");
	    	List<Top> matchingMovies = movies1;
	    	matchingMovies.addAll(movies2);
	    	if (matchingMovies.size()>=1) {
	    		System.out.println("Found Matching delete movies");
	    		for (Top mmovie:matchingMovies) {
	    			System.out.println(" "+mmovie);
	    			if (mmovie.getYear().equals(year)) {	    				
	    				return mmovie;
	    			} 
	    		}    
	    	}   
	    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
//			titleYearPK.equals()
		}
}
