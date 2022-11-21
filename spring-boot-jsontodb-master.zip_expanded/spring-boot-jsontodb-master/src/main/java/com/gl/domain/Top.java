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
//@Table(name="top-rated-movies")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@IdClass(TitleYearPK.class)
//@Embeddable
public class Top {

//	@Id
//	@GeneratedValue(strategy =GenerationType.IDENTITY)
//	@Column(name="identifier")
//	private int identifier;

	@Id
//	@Column(name="title")
    private String title;
    
	private String year;
	
//	@Column(name="genres")
	private String[] genres;
    
//	@Column(name="ratings")
	private int[] ratings;

//	@Column(name="poster")
    private String poster;

//	@Column(name="contentRating")
	private String contentRating;
	
//	@Column(name="duration")
	private String duration;
    
//	@Column(name="releaseDate")
	private String releaseDate;

//	@Column(name="averageRating")
	private double averageRating;
    
//	@Column(name="originalTitle")
	private String originalTitle;

	@Column(length=1100)
    private String storyline;
    
//	@Column(name="actors")
	private String[] actors;
	
//	@Column(name="imdbRating")
	private double imdbRating;
    
//	@Column(name="posterurl")
	private String posterurl;
    }
