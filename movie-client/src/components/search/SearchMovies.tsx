import { Component, useEffect } from "react";
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


class SearchMovies extends Component<Props & InjectedComponentProps<IMovie>> {
  // [searchParams] = useSearchParams();   
  // key = useSearchParams().get("search");
  // let key = useParams();
  // key.get("search");  
  
  render() {
      const { filterKey, filteredItems, filter } = this.props;      
      return (
          <>           
            <Row>
              <Row  className="search-input">
                <div >              
                  <input type="search" placeholder="Search by movies"
                    value={filterKey}
                    onChange={( event ) => filter( event.target.value )}      />
                </div>
              </Row>

              <Row xs={2} md={4} lg={6} className="movie-row">
                    {  
                        filteredItems?.map(
                            aMovie => (                                    
                                <Col key={aMovie.id+aMovie.title+aMovie.year} className="d-flex align-items-stretch my-3">
                                    <Movie
                                        movie ={aMovie}
                                        categoryType={this.props.categoryType}
                                    />                                    
                                </Col>                                
                            )
                        )
                    }
                </Row>
              </Row>
          </>
      );
  }
};

export default withFilter( SearchMovies, 'title' );

export const Search = () => {
  const [searchParams] = useSearchParams();   
  const key = searchParams.get("search");

  useEffect(() => {
      console.log('Location changed');
      searchParams.get("search");
  }, [searchParams]);
  
  console.log(searchParams.get("search"));
      
  return ( 
    <>  
      {(key)  || ""}
    </>
    );
  }
