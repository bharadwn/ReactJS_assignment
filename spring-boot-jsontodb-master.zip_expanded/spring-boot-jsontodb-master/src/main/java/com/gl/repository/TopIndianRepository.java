package com.gl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.gl.movies.model.TitleYearPK;
import com.gl.domain.TopIndian;

@Repository
public interface TopIndianRepository extends JpaRepository<TopIndian, Integer> {

	void deleteByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);

	List<TopIndian> findByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);

	List<TopIndian> findByTitleIgnoreCase(String title);

}
