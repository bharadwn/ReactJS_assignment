import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { Component } from "react";
import { Button, Card, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryType } from "../../models/CategoryType";
import IMovie from "../../models/IMovie";
import ITopMovie from "../../models/ITopMovie";
import { addMovieToFavourites, removeMovieFromFavouritesByID } from "../../services/movies";
import LoadingIndicator from "../commons/LoadingIndicator";

type MovieProps = {
    categoryType : CategoryType;
    movie: IMovie,
    // callBack: (aNewStatus:LoadingStatus)=>void
    callBack: ()=>void
};

type MovieState = {
    favloading: boolean,
    favMovie?: IMovie |ITopMovie| null,
    error?: string,
    showErr: boolean,
    showAddSuccess: boolean,
    showFavAlreadyAdded: boolean,
    showRemSuccess:boolean,
    idPresent: boolean
};
 
class MovieItem extends Component<MovieProps, MovieState> {
    
    state :MovieState= {
        favloading: false,
        favMovie: null,
        error: '',
        showErr: false,
        showAddSuccess:false,
        showFavAlreadyAdded:false,
        showRemSuccess: false,
        idPresent: true    
    }; 
    
    AddToFavsClicked=async()=>{
        this.setState(
            state => {
                return {
                    favloading: true                        
                };
            }
        );

        try{

                //add the movie to fav
                const data = await addMovieToFavourites( this.props.movie );
                this.setState(
                    state => {
                        return {
                            favMovie: data ,
                            showAddSuccess:true                      
                        };
                    }
                )
                

        } catch( error:any ) {
            error.data&&console.log("DAAATTTAAA?????"+error.data);
            error.response&&console.log("REESSPONSEE+++++"+error.response);
            error.response&&console.log("REESSPONSEE  INNNNERRRR+++++"+error.response.status);
            error.response.data.message&&console.log("RDMRDM-------"+error.response.data.message);
            error.message&&console.log("MESSAAGAGGEEEE*******"+error.message);
            if ( error.response.status===500){
                this.setState(
                    state => {
                        return {
                            showFavAlreadyAdded:true ,
                            showAddSuccess: false ,
                            showErr:true                      
                        };
                    }
                );
            }else{
                this.setState(
                    state => {
                        return {
                            error:((error.response && error.response.data) && error.response.data.message) || error.message,
                            showAddSuccess: false ,
                            showErr:true                      
                        };
                    }
                );
            }

            
        } finally {
            this.setState(
                state => {
                    return {
                        favloading: false                        
                    };
                }
            );
        }     
    }
 
     RemoveFromFavsClicked = async() => {
        try {
            this.setState(
                state => {
                    return {
                        favloading: true                        
                    };
                }
            );
            await removeMovieFromFavouritesByID( this.props.categoryType, this.props.movie.id );



            this.setState(
                state => {
                    return {
                        favMovie: null ,
                        showRemSuccess:true                      
                    };
                }
            );  
        } catch( error:any ) {
            this.setState(
                state => {
                    return {
                        error:((error.response && error.response.data) && error.response.data.message) || error.message,
                        showRemSuccess: false ,
                        showErr:true                      
                    };
                }
            );
        } finally {
            
            this.setState(
                state => {
                    return {
                        favloading: false                        
                    };
                }
            );
        }      
        

    }

    render() { 
        
        const {
            id,
            title,
            poster,
            posterurl
        } = this.props.movie as IMovie;

        // console.log("id?"+id?true:false)
        
        return ( 
        <>
       
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`
            ${posterurl}?${posterurl}:localhost:4001/${poster}
            `} alt={title} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between" >                   
                     <div>                        
                        <Link to={`/${this.props.categoryType}/movie/${id}`} className="me-2">     
                            {title}
                        </Link>
                    </div> 
                </Card.Title>
                 <Card.Text>
                {
                
                !(this.props.categoryType==="favourit")?
                <Button 
                    variant="light" 
                    size="sm" 
                    onClick={()=>this.AddToFavsClicked()}
                >
                    Add to Favourites<FontAwesomeIcon icon={faHeart}/>
                </Button> :
                <Button 
                    variant="light" 
                    size="sm" 
                    onClick={()=>this.RemoveFromFavsClicked()}
                >
                    Remove  from Favourites<FontAwesomeIcon icon={faHeart}/>
                </Button>
                }      
                </Card.Text>
            </Card.Body>
        </Card>
        {
            this.state.favloading && (
                <LoadingIndicator
                    size="large"
                    message="We are adding the movie to Favourites. Please wait..."
                />
            )
        } {
            (this.props.movie) && (
                <>
                {/* <ToastMessage show={showS} title="Success" message="Sucessfully added to Favourites"  onClose={false} /> */}
                    <ToastContainer className="p-3" position="top-end">
                        <Toast
                            bg="success"
                            show={this.state.showAddSuccess}
                            autohide
                            delay={5000}
                            onClose={() =>             
                                this.setState(
                                state => {
                                    return {
                                       showAddSuccess:false                      
                                    };
                                }
                                )
                            }
                            >
                            <Toast.Header closeButton={false}>
                                Success
                            </Toast.Header>
                            <Toast.Body>Sucessfully added to Favourites</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    
                </>
            )
        }{
            (this.state.showRemSuccess) && (
                <>
                {/* <ToastMessage show={showS} title="Success" message="Sucessfully added to Favourites"  onClose={false} /> */}
                    <ToastContainer className="p-3" position="top-end">
                        <Toast
                            bg="success"
                            show={this.state.showRemSuccess}
                            autohide
                            delay={5000}
                            onClose={() =>             
                                this.setState(
                                state => {
                                    return {
                                       showRemSuccess:false                      
                                    };
                                }
                                )
                            }
                            >
                            <Toast.Header closeButton={false}>
                                Removed 
                            </Toast.Header>
                            <Toast.Body>Sucessfully removed to Favourites</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    
                </>
            )
        }
        {
            (this.state.showFavAlreadyAdded) && (
                <>
                {/* <ToastMessage show={showS} title="Success" message="Sucessfully added to Favourites"  onClose={false} /> */}
                    <ToastContainer className="p-3" position="top-end">
                        <Toast
                            bg="warning"
                            show={this.state.showFavAlreadyAdded}
                            autohide
                            delay={5000}
                            onClose={() =>             
                                this.setState(
                                state => {
                                    return {
                                        showFavAlreadyAdded:false                      
                                    };
                                }
                                )
                            }
                            >
                            <Toast.Header closeButton={false}>
                                Already Added! 
                            </Toast.Header>
                            <Toast.Body>Movie was already in Favourites</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    
                </>
            )
        }
        {
            this.state.error && (
                <ToastContainer className="p-3" position="top-end">
                    <Toast
                        bg="danger"
                        show={this.state.showErr}
                        autohide
                        delay={5000}
                        onClose={() =>             
                            this.setState(
                            state => {
                                return {
                                    showErr:false                      
                                };
                            }
                            )
                        }
                    >
                        <Toast.Header closeButton={false}>
                            Error!
                        </Toast.Header>
                        <Toast.Body>{this.state.error}</Toast.Body>
                    </Toast>
                </ToastContainer>
            )
        }
        </>
         );
    }
}
 
export default MovieItem;