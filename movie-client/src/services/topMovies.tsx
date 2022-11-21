import axios from 'axios';
import IMovie from '../models/IMovie';
import ITopMovie from '../models/ITopMovie';

const getMoviesByCategory = (category: string) => {
    return axios.get<ITopMovie[]>( `http://localhost:4001/${category}`)
            .then( response => response.data )
};

//works
const getTopMovieByTitleNYear = (category: string, title : string , year: string) => {
    console.log(` category is ${category} and title is ${title} and year is ${year}`);
    return axios.get<ITopMovie|IMovie>( `http://localhost:8080/${category}/movie/${title}/year/${year}` )
            .then( response => response.data )
};

const getTopMovieByTitle = (category: string, title : string) => {
    console.log(` category is ${category} and title is ${title}`);
    return axios.get<ITopMovie>( `http://localhost:4001/${category}/?title=${title}` )
            .then( response => response.data )
};

const addMovieToFavourites = ( movie : Omit<ITopMovie, 'id'> ) => {
    console.log(`add fav `);
    return axios.post<IMovie>( 
        `http://localhost:4001/favourit`,
        movie,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
            .then( response => response.data )
};

export {
    getMoviesByCategory,
    getTopMovieByTitleNYear,
    getTopMovieByTitle,
    addMovieToFavourites
};