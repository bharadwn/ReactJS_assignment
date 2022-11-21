package com.gl.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gl.domain.FavouritesID;
import com.gl.repository.FavouritesIDRepository;

@Service

public class FavIDService {
	private final FavouritesIDRepository favIDRepository;

    public FavIDService(FavouritesIDRepository favIDRepository) {
        this.favIDRepository = favIDRepository;
    }

    public List<FavouritesID> list() {
        return favIDRepository.findAll();
    }

    public FavouritesID save(FavouritesID fav) {
    	List<FavouritesID> favedMovies1 = favIDRepository.findByTitleIgnoreCase(fav.getTitle());
    	List<FavouritesID> favedMovies2 = favIDRepository.findByTitleIgnoreCase(fav.getTitle().trim()+" ");
    	List<FavouritesID> favedMovies = favedMovies1;
    	favedMovies.addAll(favedMovies2);
    	if (favedMovies.size()>=1) {
    		System.out.println("Found Matching movies");
    		for (FavouritesID movie:favedMovies) {
    			System.out.println(" "+movie);
    			if (movie.getYear().equals(fav.getYear())) {
    				throw new IllegalArgumentException("The Movie is already Faved.");
    			}else {
    				fav.setTitle(fav.getTitle().trim()+" ");
    			}
    		}    
    	}   	
    	
        return favIDRepository.save(fav);
    }

    public void save(List<FavouritesID> favs) {
    	favIDRepository.saveAll(favs);
    }
    
    @Transactional
    public boolean deleteByTitleNYear(String title, String year) throws Exception {
    	System.out.println("inside deleteByTitleNYear"+title+"and year"+year);
    	
    	List<FavouritesID> movies1 = favIDRepository.findByTitleIgnoreCase(title);
    	List<FavouritesID> movies = movies1;
    	if (movies.size()>=1) {
    		System.out.println("Found Matching movies");
    		for (FavouritesID movie:movies) {
    			System.out.println(" "+movie);
    			if (movie.getYear().equals(year)) {
    				favIDRepository.delete(movie);
    				return true;
    			}
    		}    
    	}   
    	return false;    	
    }
    
    
    
	public FavouritesID findById(String id) {
		return favIDRepository.findById(id).get();
	}

	@Transactional
	public boolean delete(FavouritesID favedMovie) throws Exception {
		List<FavouritesID> movies1 = favIDRepository.findByTitleIgnoreCase(favedMovie.getTitle());
    	List<FavouritesID> movies2 = favIDRepository.findByTitleIgnoreCase(favedMovie.getTitle().trim()+" ");
    	List<FavouritesID> matchingMovies = movies1;
    	matchingMovies.addAll(movies2);
    	if (matchingMovies.size()>=1) {
    		System.out.println("Found Matching delete movies");
    		for (FavouritesID mmovie:matchingMovies) {
    			System.out.println(" "+mmovie);
    			if (mmovie.getYear().equals(favedMovie.getYear())) {
    				favIDRepository.delete(favedMovie);
    				return true;
    			}
    		}       		
    	}
    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
		
	}

	public FavouritesID findByTitleNYear(String title, String year) throws Exception {
		List<FavouritesID> movies1 = favIDRepository.findByTitleIgnoreCase(title);
    	List<FavouritesID> movies2 = favIDRepository.findByTitleIgnoreCase(title.trim()+" ");
    	List<FavouritesID> matchingMovies = movies1;
    	matchingMovies.addAll(movies2);
    	if (matchingMovies.size()>=1) {
    		System.out.println("Found Matching  movies");
    		for (FavouritesID mmovie:matchingMovies) {
    			System.out.println(" "+mmovie);
    			if (mmovie.getYear().equals(year)) {	    				
    				return mmovie;
    			} 
    		}    
    	}   
    	throw new Exception("The movie was not found"+HttpStatus.NOT_FOUND);
	}

	public void deleteByTitleContainsAndYearContainsAllIgnoreCase(String title, String year) {
		System.out.println("title"+title+" year "+year);
		favIDRepository.deleteByTitleContainsAndYearContainsAllIgnoreCase(title, year);	
	}
	
}
