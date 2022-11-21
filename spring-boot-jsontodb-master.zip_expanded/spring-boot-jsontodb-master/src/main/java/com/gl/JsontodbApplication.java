package com.gl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.gl.domain.FavouritesID;
import com.gl.domain.Soon;
import com.gl.domain.Theaters;
import com.gl.domain.Top;
import com.gl.domain.TopIndian;
import com.gl.service.FavIDService;
import com.gl.service.SoonService;
import com.gl.service.TheaterService;
import com.gl.service.TopIndianService;
import com.gl.service.TopService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class JsontodbApplication {

	public static void main(String[] args) {
		SpringApplication.run(JsontodbApplication.class, args);
	}

	@Bean
//	CommandLineRunner runner(UserService userService){
//	CommandLineRunner runner(TestService testService){
//	CommandLineRunner runner(SoonService soonService){
	CommandLineRunner runner(TopService topService, SoonService soonService, FavIDService favIDService, TheaterService theaService, TopIndianService topIndianService){
	    return args -> {
			// read JSON and load json
	    	
			ObjectMapper mapper1 = new ObjectMapper();
			TypeReference<List<Soon>> typeReference1 = new TypeReference<List<Soon>>(){};
			InputStream inputStream1 = TypeReference.class.getResourceAsStream("/json/soon.json");
			try {
				List<Soon> soons = mapper1.readValue(inputStream1,typeReference1);
				soonService.save(soons);
				System.out.println("Soon moviess Saved!");
			} catch (IOException e){
				System.out.println("Unable to save soon movies: " + e.getMessage());
			}
	    	
			ObjectMapper mapper2 = new ObjectMapper();
			TypeReference<List<Top>> typeReference2 = new TypeReference<List<Top>>(){};
			InputStream inputStream2 = TypeReference.class.getResourceAsStream("/json/top.json");
			try {
				List<Top> tops = mapper2.readValue(inputStream2,typeReference2);
				topService.save(tops);
				System.out.println("Top moviess Saved!");
			} catch (IOException e){
				System.out.println("Unable to save Top movies: " + e.getMessage());
			}
			
			ObjectMapper mapper3 = new ObjectMapper();
			TypeReference<List<FavouritesID>> typeReference3 = new TypeReference<List<FavouritesID>>(){};
			InputStream inputStream3 = TypeReference.class.getResourceAsStream("/json/favs.json");
			try {
				List<FavouritesID> favs = mapper3.readValue(inputStream3,typeReference3);
				favIDService.save(favs);
				System.out.println("Fav movies Saved!");
			} catch (IOException e){
				System.out.println("Unable to save Favourite movies: " + e.getMessage());
			}			
			
			ObjectMapper mapper4 = new ObjectMapper();
			TypeReference<List<Theaters>> typeReference4 = new TypeReference<List<Theaters>>(){};
			InputStream inputStream4 = TypeReference.class.getResourceAsStream("/json/theaters.json");
			try {
				List<Theaters> theas = mapper4.readValue(inputStream4,typeReference4);
				theaService.save(theas);
				System.out.println("In Theaters movies Saved!");
			} catch (IOException e){
				System.out.println("Unable to save In theater movies: " + e.getMessage());
			}
			
			ObjectMapper mapper5 = new ObjectMapper();
			TypeReference<List<TopIndian>> typeReference5 = new TypeReference<List<TopIndian>>(){};
			InputStream inputStream5 = TypeReference.class.getResourceAsStream("/json/topIndian.json");
			try {
				List<TopIndian> topIndian = mapper5.readValue(inputStream5,typeReference5);
				topIndianService.save(topIndian);
				System.out.println("Top Indian movies Saved!");
			} catch (IOException e){
				System.out.println("Unable to save Top Indian movies: " + e.getMessage());
			}
			
			
	    };
	}
}
