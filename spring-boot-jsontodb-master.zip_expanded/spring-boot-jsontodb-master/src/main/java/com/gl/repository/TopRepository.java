package com.gl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import com.gl.movies.model.TitleYearPK;
import org.springframework.stereotype.Repository;

import com.gl.domain.TitleYearPK;
import com.gl.domain.Top;

@Repository
public interface TopRepository extends JpaRepository<Top, TitleYearPK> {

	List<Top> findByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);

	void deleteByTitleContainsAndYearContainsAllIgnoreCase(String title, String year);

	List<Top> findByTitleIgnoreCase(String title);

}
