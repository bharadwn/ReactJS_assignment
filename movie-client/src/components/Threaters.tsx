import Movies from "./movie-list/Movies";
// import SearchMoviesList from "./movie-list/SearchMoviesList";
// import MoviesList from "./movie-list/MoviesList";

const Theaters = () => {
    return ( 
        <>
            <Movies categoryType="movies-in-theaters" categoryName="Movies in theaters"/> 
            {/* <MoviesList categoryType="movies-in-theaters" categoryName="Movies in theaters"/> */}
            {/* <SearchMoviesList  categoryType="movies-in-theaters" categoryName="Movies in theaters" /> */}
        </>
     );
}
 
export default Theaters;