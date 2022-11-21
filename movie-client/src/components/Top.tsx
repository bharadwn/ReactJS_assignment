// import TopMoviesList from "./topmovie-list/TopMoviesList";
import Movies from "./movie-list/Movies";
// import MoviesList from "./movie-list/MoviesList";
// import TopMovies from "./topmovie-list/TopMovies";


const Top = () => {
    return ( 
        <>
           {/* <TopMoviesList categoryType="top-rated-movies"  categoryName="Top rated movies"/> */}
           {/* <TopMovies categoryType="top-rated-movies"  categoryName="Top rated movies"/> */}
           {/* <MoviesList categoryType="top-rated-movies"  categoryName="Top rated movies"/> */}
           <Movies categoryType="top-rated-movies" categoryName="Top rated movies"/> 
           
        </>
     );
}
 
export default Top;