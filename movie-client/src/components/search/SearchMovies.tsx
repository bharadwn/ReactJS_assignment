import {  useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { CategoryType } from "../../models/CategoryType";
import IMovie from "../../models/IMovie";
import withFilter, { InjectedComponentProps } from "../commons/withFilter";
import Movie from "../movie-list/Movie";
import '../movie-list/movie.css';

type Props = {
  items: IMovie[] ,
  categoryType: CategoryType,
};


// class SearchMovies extends Component<Props & InjectedComponentProps<IMovie>> {
  const SearchMovies: React.FC<Props & InjectedComponentProps<IMovie>> = ({items, categoryType, filterKey, filteredItems, filter }) => {
    // const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [searchParams] = useSearchParams();   
    const [ key, setKey ] = useState<string>(filterKey);
  
    useEffect(() => {
        console.log('Location changed'+searchParams);
        setKey(searchParams.get("search")+"");
        console.log('Location changed'+key);
        // filterKey=key;
        filter(key);

        return () => {
          console.log( 'cleanupclean clean' );
              // if (this.props.location !== prevProps.location) {
              //     console.log("Route Updated");
              //   }
      };
    }, [searchParams, filterKey, filter, key]);
  
  // render() {
      // const { filterKey, filteredItems, filter } = props;      
      return (
          <>           
            <Row className="movie-list">
              {/* <Row  className="search-input">
                <div >              
                  <input type="search" placeholder="Search movies"
                    value={filterKey}
                    onChange={( event ) => filter( event.target.value )}      />
                </div>
              </Row> */}
              {/* <Search/> */}
              

              <Row xs={2} md={4} lg={6} className="movie-row">
                    {  
                        filteredItems?.map(
                            aMovie => (                                    
                                <Col key={aMovie.id+aMovie.title+aMovie.year} className="d-flex align-items-stretch my-3">
                                    <Movie
                                        movie ={aMovie}
                                        categoryType={categoryType}
                                    />                                    
                                </Col>                                
                            )
                        )
                    }
                </Row>
              </Row>
          </>
      );
  // }
};

export default withFilter( SearchMovies, 'title' );

export const Search = () => {
  const [searchParams] = useSearchParams();   
  const [ key, setKey ] = useState(searchParams.get("search"));

  useEffect(() => {
      console.log('Location changed');
      setKey(searchParams.get("search"));
      console.log('Location changed'+key);
  }, [searchParams,key]);
  
  console.log(searchParams.get("search"));
      
  return ( 
    <>  
      {(key)  || ""}
    </>
    );
  }
