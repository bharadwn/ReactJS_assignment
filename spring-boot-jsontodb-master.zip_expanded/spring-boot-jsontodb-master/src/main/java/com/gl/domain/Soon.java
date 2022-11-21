/**
 * Model Class for Movie
 */
package com.gl.domain;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * @author Nandita
 * 
 * Entity, which will help use create movies table in database 
 * Annotating the class with Hibernate Annotations
 * 
 */
@Data
//@Table(name="movies-coming")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@Embeddable
public class Soon {
//	@Id
//	@GeneratedValue(strategy =GenerationType.IDENTITY)
//	@Column(name="identifier")
//	private int identifier;	
	private String id;
	
	@Id
    private String title;
    
//	@Column(name="year",insertable =  false, updatable = false)
	private String year;
	
//	@Column(name="genres",insertable =  false, updatable = false)
//	private ArrayList<String> genres;
	private String[] genres;
    
//	@Column(name="ratings",insertable =  false, updatable = false)
//	private ArrayList<Integer> ratings;
	private int[] ratings;

//	@Column(name="poster",insertable =  false, updatable = false)
    private String poster;

//	@Column(name="contentRating",insertable =  false, updatable = false)
	private String contentRating;
	
//	@Column(name="duration",insertable =  false, updatable = false)
	private String duration;
    
//	@Column(name="releaseDate",insertable =  false, updatable = false)
	private String releaseDate;

//	@Column(name="averageRating",insertable =  false, updatable = false)
	private double averageRating;
    
//	@Column(name="originalTitle",insertable =  false, updatable = false)
	private String originalTitle;

	@Column(length=1100)
    private String storyline;
    
//	@Column(name="actors",insertable =  false, updatable = false)
//	private ArrayList<String> actors;
	private String[] actors;
	
//	@Column(name="imdbRating",insertable =  false, updatable = false)
	private double imdbRating;
    
//	@Column(name="posterurl")
	private String posterurl;
	
}


