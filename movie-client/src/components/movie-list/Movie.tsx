import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from "react";
import { Button, Card, Toast, ToastContainer } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { CategoryType } from "../../models/CategoryType";
import IMovie from "../../models/IMovie";
// import ITopMovie from "../../models/ITopMovie";
import { addMovieToFavourites, removeMovieFromFavouritesByTitleNYear } from "../../services/movies";
import './movie.css';

type MovieProps = {
    categoryType : CategoryType;
    movie: IMovie,
    // callBack: ()=>void
};

// type MovieState = {
//     favloading: boolean,
//     favMovie?: IMovie ,
//     error?: string,
//     showErr: boolean,
//     showAddSuccess: boolean,
//     showFavAlreadyAdded: boolean,
//     showRemSuccess:boolean
// };

// const MovieItem = ({categoryType, movie, callBack}:MovieProps) => {
const Movie = ({categoryType, movie}:MovieProps) => {    
    const [ favMovie, setFavMovie] = useState<IMovie |null > ( null  );    
    const [ error, setError ] = useState<string> ( "" );
    const [ showErr, setShowErr ] = useState<boolean> ( false );
    const [ showAddSuccess, setShowAddSuccess ] = useState<boolean>( false );
    const [ showFavAlreadyAdded, setShowFavAlreadyAdded ] = useState<boolean>( false );
    const [ showRemSuccess, setShowRemSuccess ] = useState<boolean>( false );

    const [ movie1, setMovie1] = useState<IMovie | null> ( movie );    
    
    // const [ idPresent, setIdPresent ] = useState<boolean>( true );    
    const navigate = useNavigate();
       
    const AddToFavsClicked=async()=>{
        try {
                const data = await addMovieToFavourites( movie );                
                setFavMovie(data);
                setShowAddSuccess(true);  
        } catch( error:any ) {
            error.data&&console.log("DAAATTTAAA?????"+error.data);
            error.response&&console.log("REESSPONSEE+++++"+error.response);
            error.response&&console.log("REESSPONSEE  INNNNERRRR+++++"+error.response.status);
            error.response.data.message&&console.log("RDMRDM-------"+error.response.data.message);
            error.message&&console.log("MESSAAGAGGEEEE*******"+error.message);
            if ( error.response.status===500){
                setShowFavAlreadyAdded(true);
                setShowAddSuccess(false);
                setShowErr(true);
            }else{
                setError(((error.response && error.response.data) && error.response.data.message) || error.message);
                setShowAddSuccess(false);
                setShowErr(true);                            
            }
        } 
     }

     const LinkToMovie = ()=>{        
        navigate(`/${categoryType}/movie/${movie.title}/year/${movie.year}`) ;   
     }

     
     const RemoveFromFavsClicked = async() => {
        if(movie1 !== null){
            try {
                await removeMovieFromFavouritesByTitleNYear( movie.title, movie.year );
                setFavMovie(null);
                setShowRemSuccess(true);
                setMovie1(null);
                window.location.reload();
                // callBack(); //calling back to set the movie cnt
            } catch( error:any ) {
                setError(((error.response && error.response.data) && error.response.data.message) || error.message);
                setShowErr(true); 
                setShowRemSuccess(false);            
            } 
        } else
        {
            setError("This movie has been removed");
            setShowErr(true); 
            setShowRemSuccess(false); 
        }
    }

    // const updateShowAddSuccess = useCallback(()=>()=> {console.log("setting to false");setShowAddSuccess(false)},[]);
    // const updateShowRemSuccess = useCallback(()=>()=> {console.log("setting to rem false");setShowRemSuccess(false)},[]);
    // const updateShowRemSuccess1 = ()=> {console.log("setting to rem false");setShowRemSuccess(false)};
    // const updateShowFavAlreadyAdded = useCallback(()=>()=> setShowFavAlreadyAdded(false),[]);
    // const updateShowErr = useCallback(()=>()=> setShowErr(false),[]);
    
    const updateShowAddSuccess = ()=> {console.log("setting to false");setShowAddSuccess(false)};
    const updateShowRemSuccess = ()=> {console.log("setting to rem false");setShowRemSuccess(false)};
    const updateShowFavAlreadyAdded = ()=> setShowFavAlreadyAdded(false);
    const updateShowErr = ()=> setShowErr(false);
    // {
    //     (movie) && {
    //         const {
    //             // id,
    //             title,
    //             year,
    //             poster,
    //             posterurl
    //         } = movie as IMovie
    //     }
    // }
    return ( 
        <>
        {/* <Card style={{ width: '18rem' }}> */}
        <Card className="movie-main-card">
            <Card.Img variant="top" src={`${movie.posterurl}?${movie.posterurl}:localhost:8080/${movie.poster}`} alt={movie.title} className="movie-img"/>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between movie-title" >                    
                
                    {/* <div className="">                         */}
                        {/* <Link to={`/${categoryType}/movie/${title}/year/${year}`} className="me-2">  */}
                        {/* <Link to={`/${categoryType}/movie/${id}`} className="me-2">    */}
                         {/* <Nav.Link ref={()=>navigate(`/${categoryType}/movie/${id}`)  } >                             */}
                            {/* {title} */}
                        {/* </Link> */}
                        <Button variant="link" onClick={()=>LinkToMovie()} className="movie-link">{movie.title}</Button>
                   {/* </div>  */}
                </Card.Title>
                <Card.Text className="movie-btn">{
                    //Check for Fav tab , if so then show remove from Favs button.
                    !(categoryType==="favourit")?
                    <Button variant="light" size="sm" 
                        onClick={()=>AddToFavsClicked()} >
                        Add to Favourites<FontAwesomeIcon icon={faHeart}/>
                    </Button> :
                    <Button variant="light" size="sm" 
                        onClick={()=>RemoveFromFavsClicked()}>
                        Remove from Favourites<FontAwesomeIcon icon={faHeart}/>
                    </Button>
                }      
                </Card.Text>
            </Card.Body>
        </Card>
         {
            (favMovie||movie) && (  
                <>              
                <ToastChild showToast={showAddSuccess} bgProp="success" title="Success" message="Sucessfully added to Favourites" callBack1={updateShowAddSuccess.bind(this)} />
                </>
            )
        }{
            (showRemSuccess) && (            
                <ToastChild showToast={showRemSuccess} bgProp="success" title="Removed" message="Sucessfully removed to Favourites" callBack1={updateShowRemSuccess.bind(this)} />
            )   
        }
        {
            (showFavAlreadyAdded) && (                
                <ToastChild showToast={showFavAlreadyAdded} bgProp="warning" title="Already Added!" message="Movie was already in Favourites" callBack1={updateShowFavAlreadyAdded.bind(this)} />
            )
        }
        {
            (error) && (            
                <ToastChild showToast={showErr} bgProp="danger" title="Error!" message={error} callBack1={updateShowErr.bind(this)} />    
            )
        }
        </>

     );
}
 
export default Movie;

type Props = {
    showToast : boolean, 
    bgProp: string
    title: string, 
    message: string,
    callBack1: () => void
};

export const ToastChild =( {showToast, bgProp, title, message, callBack1}:Props  ) => {
    // const [position, setPosition] = useState('top-start');

    return (
        <ToastContainer className="p-3" position="top-end">
            <Toast
                bg={bgProp}
                show={showToast}
                autohide
                delay={1500}
                onClose={()=>{console.log("inside onclose");callBack1()}} >
                <Toast.Header closeButton={false}>
                {title} 
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
            
        </ToastContainer>
    )
};


