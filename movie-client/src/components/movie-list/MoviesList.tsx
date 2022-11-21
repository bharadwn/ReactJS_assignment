import { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
// import MoviesListItem from './MoviesListItem';
import LoadingIndicator from '../commons/LoadingIndicator';
import IMovie from '../../models/IMovie';
import { LoadingStatus } from '../../models/StatusTypes';
import { getMoviesByCategory } from '../../services/movies';
import { CategoryType } from '../../models/CategoryType';
import { CategoryName } from '../../models/CategoryName';
// import MovieItem from './MovieItem';
import Movie from './MovieItem';

// import Search from '../search/Search';
// import Mov from './Mov';
// import Search from '../search/Search';


type Props = {
    categoryName: CategoryName;
    categoryType : CategoryType;
    
};

type State = {
    status: LoadingStatus,
    theMovies: IMovie[],
    theMoviesCount: number,
    error?: Error
};

class MoviesList extends Component<Props, State> {
    
    // constructor(props: Props){
    //     super(props);
    //     this.updateState = this.updateState.bind(this);      
    // }

    state : State = {
        status: 'LOADING',
        theMovies:[],
        theMoviesCount:0
    };

    render() {
        let el;
        // const { status, theMovies, theMoviesCount, error } = this.state;
        const { status, theMovies, error } = this.state;

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies. Please wait..."
                    />
                );
                break;

            case 'NO_DATA':
                el = (
                    <Alert key={'info'} variant={'info'}>
                    No movies to display, please add movies to {this.props.categoryName}.
                    </Alert>
                )
                break;
            case 'LOADED':
                
                // try {
                //     theMovies?.map(
                //         aMovie => {
                //             // console.log(`${aMovie.id}`);
                //             console.log (`${aMovie.id}`!==undefined);
                //         }
                //      )                    
                // }
                // catch (error:any){
                //     // console.log(error);
                // }
                // console.log("id is------------"+str);
                console.log("Inside MoviesList"+this.props.categoryType);
                // el = (
                //     <>
                //    <Search />
                //    <Mov categoryType={this.props.categoryType} categoryName={this.props.categoryName} movieCnt ={theMoviesCount}
                //     items={theMovies}  
                //     callBack={this.updateState.bind(this)}
                //     />
                //     </>
                // );
                el = (
                    <>
                   {/* <Search /> */}
                  
                   
                    <Row xs={2} md={4} lg={6}>
                        {  
                            theMovies?.map(
                                aMovie => (                                    
                                    <Col key={aMovie.id+aMovie.title+aMovie.year} className="d-flex align-items-stretch my-3">

                                        <Movie 
                                            movie ={aMovie}
                                            categoryType={this.props.categoryType}
                                            callBack={this.updateState.bind(this)}
                                        />
                                    </Col>
                                    
                                )
                            )
                        }
                    </Row>
                    
                    </>
                );
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
    }

    // updateState=async(aNewStatus:LoadingStatus)=>{

    //this method is used as a callBack from  Movie to force  refresh on  the page , when
    //remove fav movie is selected, a forced refresh is important
    updateState=async()=>{
        console.log("INside update State????????????????????????????");
        
        try {
            const data = await getMoviesByCategory(this.props.categoryType);
            
            if (data.length ===0){
                console.log("NO DATA");
                this.setState({
                    status: 'NO_DATA',
                    theMovies: data,
                    theMoviesCount:0
                });
            } else {
                this.setState({
                    status: 'LOADED',
                    theMovies: data,
                    theMoviesCount:data.length
                });
            }
            
        } catch( error:any ) {
            this.setState({
                status: 'ERROR_LOADING',
                error
            });
        }
    }
 
    async componentDidMount() {
        // this.updateState();
        // this.setState({
        //     status: 'LOADING'
        // });
        // this.updateState('LOADING');

        try {
            const data = await getMoviesByCategory(this.props.categoryType);
            
            if (data.length ===0){
                console.log("NO DATA");
                this.setState({
                    status: 'NO_DATA',
                    theMovies: data,
                    theMoviesCount:0
                });
            } else {
                this.setState({
                    status: 'LOADED',
                    theMovies: data,
                    theMoviesCount:data.length
                });
            }
            
        } catch( error:any ) {
            this.setState({
                status: 'ERROR_LOADING',
                error
            });
        }
    }
}

export default MoviesList;