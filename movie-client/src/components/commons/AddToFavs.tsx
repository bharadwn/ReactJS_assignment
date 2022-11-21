// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { CategoryType } from "../../models/CategoryType";
import IMovie from "../../models/ITopMovie";
// import { LoadingStatus } from "../../models/types";
import { addMovieToFavourites } from "../../services/movies";
import LoadingIndicator from "./LoadingIndicator";

type Props = {
    movieToAdd: IMovie
};

const AddToFavs = ({movieToAdd}:Props) => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ movie, setMovie ] = useState<IMovie>(  );
    const [ error, setError ] = useState<string>( '' );
    const [ showE, setErrorShow ] = useState<boolean>( false );
    const [ showS, setSuccessShow ] = useState<boolean>( false );
    
    // useEffect(() => {
    const addFav = async () => {
        try {
            const data = await addMovieToFavourites( movieToAdd );
            setMovie( data );
        } catch( error:any ) {
            setError( ((error.response && error.response.data) && error.response.data.message) || error.message );
            setErrorShow( true );
        } finally {
            setLoading( false );
        }
    }

    
    // fetchMenu();
    // }
    // // , []
    // );

    return ( 
        <>
            <Button 
                variant="light" 
                size="sm" 
                // href={`/favorit`}
                onClick={()=>addFav()}
            >
                Add to Favourites<FontAwesomeIcon icon={faHeart}/>
            </Button>
            {
                loading && (
                    <LoadingIndicator
                        size="large"
                        message="We are adding the movie to Favourites. Please wait..."
                    />
                )
            } {
                movie && (
                    <>
                        <ToastContainer className="p-3" position="top-end">
                            <Toast
                                bg="info"
                                show={showS}
                                autohide
                                delay={5000}
                                onClose={() => setSuccessShow( false )}
                            >
                                <Toast.Header closeButton={false}>
                                    Success
                                </Toast.Header>
                                <Toast.Body>Sucessfully added to Favourites</Toast.Body>
                            </Toast>
                        </ToastContainer>
                        
                    </>
                )
            }
            {
                error && (
                    <ToastContainer className="p-3" position="top-end">
                        <Toast
                            bg="danger"
                            show={showE}
                            autohide
                            delay={5000}
                            onClose={() => setErrorShow( false )}
                        >
                            <Toast.Header closeButton={false}>
                                Error!
                            </Toast.Header>
                            <Toast.Body>{error}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                )
            }
        </>
     );
}
 
export default AddToFavs;