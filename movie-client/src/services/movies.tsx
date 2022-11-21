import axios from "axios";
import IMovie from "../models/IMovie";

//works
const getMoviesByCategory = (category: string) => {
    return axios.get<IMovie[]>( `http://localhost:8080/${category}/`)
            .then( response => response.data )
};

//works
const getMovieByID = (category: string, id : string ) => {
    console.log(` category is ${category} and id is ${id}`);
    return axios.get<IMovie>( `http://localhost:8080/${category}/${id}` )
            .then( response => response.data )
};

const getMovieByTitleNYear = (category: string, title : string , year: string) => {
    console.log(` category is ${category} and title is ${title} and year is ${year}`);
    return axios.get<IMovie>( `http://localhost:8080/${category}/movie/${title}/year/${year}` )
            .then( response => response.data )
};

const getMoviesByTitle = (category: string, title : string ) => {
    console.log(` category is ${category} and title is ${title} `);
    return axios.get<IMovie>( `http://localhost:8080/${category}/?title=${title}` )
            .then( response => response.data )
};

//works
const addMovieToFavourites = ( movie : Omit<IMovie, 'id'> ) => {
    console.log(`add fav `);
    return axios.post<IMovie>( 
        `http://localhost:8080/favourit/save`,
        movie,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
            .then( response => response.data )
};

const removeMovieFromFavouritesByID =(category: string, id : string ) => {
    console.log(`remove fav category is ${category} and id is ${id}`);
    return axios.delete<IMovie>( `http://localhost:8080/${category}/${id}` )
            .then( response => response.data )
};

//works
const removeMovieFromFavouritesByTitleNYear =(title : string, year: string ) => {
    console.log(`remove fav : title is ${title} and year is ${year}`);
    return axios.delete<IMovie>( `http://localhost:8080/favourit/delete/${title}/${year}` )
            .then( response => response.data )
};

const removeMovieFromFavourites =(movie : Omit<IMovie, 'id'> ) =>  {
    console.log(`remove fav category is favourites and movie is ${movie}`);
    return axios.delete<void>( `http://localhost:8080/favourit/delete`,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        } 
    )
    .then( response => response.data )
};

//?
const getMovieByIdTitleYear = (category: string, id: string, title : string , year: string) => {
    console.log(` category is ${category} and title is ${title} and year is ${year}`);
    return axios.get<IMovie>( `http://localhost:8080/${category}/?id=${id}&title=${title}&year=${year}` )
            .then( response => response.data )
};


export {    
    getMoviesByCategory,
    getMovieByID,
    getMovieByTitleNYear,
    getMoviesByTitle,
    addMovieToFavourites,
    removeMovieFromFavouritesByID,
    getMovieByIdTitleYear,
    removeMovieFromFavourites,
    removeMovieFromFavouritesByTitleNYear
};


//http://localhost:4001/top-rated-movies/?title=Ghajini&year=2005
// "/:category/:title": "/:category/:title",
// "/:category/title=:title&year=:year": "/:category/title=:title&year=:year",
// "/:title": "/:title",
// "/title=:title&year=:year": "/title=:title&year=:year"