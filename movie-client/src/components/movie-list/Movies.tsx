
import {  memo, useEffect, useState } from 'react';
import {   Alert } from 'react-bootstrap';
import LoadingIndicator from '../commons/LoadingIndicator';
import IMovie from '../../models/IMovie';
import { LoadingStatus } from '../../models/StatusTypes';
import { getMoviesByCategory } from '../../services/movies';
import { CategoryType } from '../../models/CategoryType';
import { CategoryName } from '../../models/CategoryName';
import SearchMovies from '../search/SearchMovies';


type Props = {
    categoryName: CategoryName;
    categoryType : CategoryType;
};


const Movies= memo(({categoryName,categoryType}:Props) => {    
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ theMovies, setTheMovies ] = useState<IMovie[] >([]);
    const [ theMoviesCount, setTheMoviesCount] = useState<number>(0);
    const [ error, setError ] = useState<Error | null>( null );

    // const [searchParams] = useSearchParams();
    
    // const updateState=useCallback(()=>async()=>{
    // const updateState=async()=>{
    //     setTheMoviesCount(theMoviesCount-1);
    //     try {
    //         const data = await getMoviesByCategory(categoryType);                    
    //         if (data.length ===0){
    //             console.log("NO DATA");
    //             setStatus('NO_DATA');
    //             setTheMovies(data);
    //             setTheMoviesCount(0);               
    //         } else {
    //             setStatus('LOADED');
    //             setTheMovies(data);
    //             setTheMoviesCount(data.length);   
    //         }                    
    //     } catch( error:any ) {
    //         setStatus('ERROR_LOADING');
    //         setError(error);       
    //     }            
    // }
    // ,[categoryType,theMoviesCount]);

    useEffect( () => {
        const getAllMovies = async () => {
            console.log("inside getAllMovies:::")
            try {
                const data = await getMoviesByCategory(categoryType);  

                
                if (data.length>0){
                    setStatus('LOADED');
                    setTheMovies(data);
                    setTheMoviesCount(data.length); 
                } else {
                    setStatus('NO_DATA');
                    setTheMovies(data);
                    setTheMoviesCount(0);               
                }                      
            } catch( error:any ) {
                setStatus('ERROR_LOADING');
                setError(error);       
            }            
        };
        getAllMovies();   
        
        return () => {
            console.log( 'cleanup function like component did mount' );

                // if (this.props.location !== prevProps.location) {
                //     console.log("Route Updated");
                //   }
        };
    }
    ,[categoryType, theMoviesCount, status]
    // ,[categoryType, theMovies, status]
    );

    let el=<></>;
    switch( status ) {
        case 'LOADING':
            el = (
                <LoadingIndicator  size="large"
                    message="We are fetching the list of movies. Please wait..."
                />
            );
            break;            
        case 'LOADED':            
            console.log("Inside MoviesList"+categoryType);
            el = (                
                <>                    
                <SearchMovies items={theMovies} categoryType={categoryType} />  
                </>               
            );
            break;
        case 'NO_DATA':
            el = (  <Alert key={'info'} variant={'info'}>
                        No movies to display, please add movies to {categoryName}.
                    </Alert> );
            break;
        case 'ERROR_LOADING':
            el = ( <Alert variant="danger my-3">
                    {error?.message}
                    </Alert> );
            break;
    }
    return el;
});
 
export default Movies;
