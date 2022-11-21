package com.gl.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gl.domain.FavouritesID;
import com.gl.domain.TitleYearPK;

@Repository
public interface FavouritesIDRepository extends JpaRepository<FavouritesID, TitleYearPK> {
	/**
	 * find by ID for In Theater movies ( with String ID as input)
	 * @param theId
	 * @return
	 */
	Optional<FavouritesID> findById(String anID);

	/***
	 * delete by ID ( String as ID)
	 * @param id
	 */
	void deleteById(String id);

	/**
	 * Find the movie matching title and the year of movie released
	 * @param title
	 * @param year
	 * @return
	 */
     List<FavouritesID> findByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);


 	/***
 	 * Delete 
 	 * @param title
 	 * @param year
 	 */
     @Transactional
	 void deleteByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);

	 List<FavouritesID> findByTitleIgnoreCase(String title);

	 List<FavouritesID> findByYearContainsIgnoreCase(String year);

}

