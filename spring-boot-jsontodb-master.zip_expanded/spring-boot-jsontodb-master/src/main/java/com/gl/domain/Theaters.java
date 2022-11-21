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
//@Table(name="movies-in-theaters")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@Embeddable
public class Theaters {
//	@Id
//	@GeneratedValue(strategy =GenerationType.IDENTITY)
//	@Column(name="identifier")
//	private int identifier;

	
	private String id;
	@Id
    private String title;    
	private String year;	
	private String[] genres;    
	private int[] ratings;
    private String poster;
	private String contentRating;	
	private String duration;    
	private String releaseDate;
	private double averageRating;    
	private String originalTitle;
	@Column(length=1100)
    private String storyline;    
	private String[] actors;	
	private double imdbRating;    
	private String posterurl;
    }
