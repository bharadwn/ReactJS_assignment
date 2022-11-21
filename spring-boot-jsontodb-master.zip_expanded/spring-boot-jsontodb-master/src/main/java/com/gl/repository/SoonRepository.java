package com.gl.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.domain.Soon;

@Repository
public interface SoonRepository extends JpaRepository<Soon, String> {
	/**
	 * find by ID for In Theater movies ( with String ID as input)
	 * @param theId
	 * @return
	 */
	Optional<Soon> findById(String theId);

	/***
	 * delete by ID ( String as ID)
	 * @param id
	 */
	void deleteById(String id);

	List<Soon> findByTitleIgnoreCase(String title);
}
