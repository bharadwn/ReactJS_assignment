import Movies from "./movie-list/Movies";
// import MoviesList from "./movie-list/MoviesList";
// import TopMovies from "./topmovie-list/TopMovies";
// import TopMovieList from "./topmovie-list/TopMoviesList";

const TopIndian = () => {
    return ( 
        <>
           {/* <TopMovieList categoryType="top-rated-india"  categoryName="Top rated Indian"/> */}
           {/* <TopMovies categoryType="top-rated-india"  categoryName="Top rated Indian"/> */}
           {/* <MoviesList categoryType="top-rated-india"  categoryName="Top rated Indian"/> */}
           <Movies categoryType="top-rated-india"  categoryName="Top rated Indian"/>
        </>
     );
}
 
export default TopIndian;