import Modal from 'react-bootstrap/Modal';
import  { useState, useEffect, memo } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import LoadingIndicator from '../commons/LoadingIndicator';
import ITopMovie from '../../models/ITopMovie';
import { LoadingStatus } from '../../models/StatusTypes';
// import { getMovieByTitleNYear } from '../../services/movies';
import { getTopMovieByTitleNYear } from '../../services/topMovies';
import IMovie from '../../models/IMovie';
// import { getTopMovieByTitle } from '../../services/topMovies';
// import {   getMovieByTitle } from '../../services/movies';

type Props = {
    showModal: boolean
};

const TopModalMovieDetails = memo(({showModal}:Props) =>{

    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ movie, setMovie ] = useState<IMovie| ITopMovie | null>(null);
    const [ error, setError ] = useState<Error | null>( null );
    const navigate = useNavigate();
    // const {categoryType,id} = useParams();
    const {categoryType,title, year} = useParams();

    useEffect(
        () => {
            
            const fetchMovie = async () => {
                try {
                    console.log(`${title}  and ${categoryType} and ${year}`);
                    const data = await  getTopMovieByTitleNYear(`${categoryType}`, `${title}`,`${year}`);
                    setMovie( data );
                    setStatus( 'LOADED' );
                } catch( error:any ) {                    
                    setError( error );
                    setStatus( 'ERROR_LOADING' );
                }
            };
            fetchMovie();
        }
        ,[categoryType, title, year]
        // [categoryType, id]
    );

    const convertToDisplayString=(inputStr: string[])=> {
        let outputStr="";
        let i=0;
        if (inputStr!== undefined) {
            while(i<inputStr?.length-1) {
                outputStr=outputStr+inputStr[i]+", ";
                i++;
            }
        outputStr=outputStr+inputStr[i];
        } else {
            setStatus('NO_DATA');
            setMovie(null);
        }
        return outputStr;
    }

    let el=<></>;

    switch( status ) {
        case 'LOADING':
            el = (
                <LoadingIndicator
                    size="large"
                    message="We are fetching the details of the movie. Please wait..."
                />
            );
            break;
        case 'LOADED':
            
            const {
                
                // id,
                title,
                year,
                genres,
                // ratings,
                // poster,
                contentRating,
                duration,
                releaseDate,
                averageRating,
                // originalTitle,
                storyline,
                actors,
                imdbRating,
                posterurl
            } = movie as ITopMovie|IMovie;
            let theGenreStr = convertToDisplayString(genres);
            let theActorsStr = convertToDisplayString(actors);

            el = (
                <>

                <style type="text/css">
                        {`
                    .btn-flat {
                    background-color: purple;
                    color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
                <Modal
                    show={showModal}
                    // eslint-disable-next-line no-restricted-globals
                    // onHide={()=>window.history.back()}
                    onHide={() =>{             
                            showModal=false;
                            navigate(`/${categoryType}`);
                        }
                    }
                    fullscreen={true}
                    dialogClassName="modal-180w modal-xl"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                        <Link to={`/${categoryType}`}>Back to Home</Link>
                        <hr/>
                        <Row >
                            <Col lg={3}>
                                <img 
                                    src={`${posterurl}`}
                                    alt={title}
                                    className="w-100"
                                />
                            </Col>
                            <Col lg={9}>
                                <Row><h1>{title} ({year})</h1></Row>
                                <Row>
                                    <Row><Col lg={2}>Imdb Rating</Col><Col>{imdbRating}</Col></Row>
                                    <Row><Col lg={2}>Content Rating</Col><Col>{contentRating}</Col></Row>
                                    <Row><Col lg={2}>Average Rating</Col><Col>{averageRating}</Col></Row>
                                    <Row><Col lg={2}>Duration</Col><Col>{duration}</Col></Row>
                                    <Row><Col lg={2}>Genres</Col><Col>{theGenreStr}</Col></Row>
                                    <Row><Col lg={2}>Actors</Col><Col>{theActorsStr}</Col></Row>
                                    <Row><Col lg={2}>Release Date</Col><Col>{releaseDate}</Col></Row>
                                    <Row><Col lg={2}>Story line</Col><Col>{storyline}</Col></Row>
                                </Row>
                            </Col>
                            
                        </Row>   
                        </>
                    </Modal.Body>
                </Modal>
                                     
                </>
            );
            break;
        case 'NO_DATA':
            el = (  <Alert key={'info'} variant={'info'}>
                        No movie to display.
                    </Alert> );
            break;
        case 'ERROR_LOADING':
            el = (
                <Alert variant="danger my-3">
                    {error?.message}
                </Alert>
            );
            break;
    }

    return el;
    
});
 
export default TopModalMovieDetails;