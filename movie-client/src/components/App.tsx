import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./commons/ErrorBoundary";
// import ModalMovieDetails from "./movie-details/ModalMovieDetails";
import Favs from "./Favs";
// import NavigationMenu from "./NavigationMenu";
import Soon from "./Soon";
import Theaters from "./Threaters";
import Top from "./Top";
import TopIndian from "./TopIndian";
import TopModalMovieDetails from "./movie-details/TopModalMovieDetails";
import Layout from "./Layout";
import NoPageFound from "./commons/NoPageFound";

const App = () => {
    return ( 
        <>
            <ErrorBoundary>
                <Router>
                    {/* <NavigationMenu /> */}
{/* 
                    <Routes>
                         <Route path="/:categoryType/movie/:id" element={ <ModalMovieDetails showModal={true} /> } />
                    </Routes> */}
                    {/* <Routes>
                         <Route path="/:categoryType/movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />
                    </Routes> */}
                    <Routes>
                        <Route path="/" element={ < Layout /> } > 
                            <Route  index element={ < Theaters /> } />    
                            <Route  path="movies-in-theaters" element={ < Theaters /> } >  
                                {/* <Route path="list" element={ < Theaters /> } /> */}
                                {/* <Route path="movie/:id" element={ <ModalMovieDetails showModal={true} /> } /> */}
                                {/* <Route path="*" element={ <Theaters /> } /> */}
                            </Route>
                            <Route path="top-rated-movies" element={ < Top /> } >  
                                {/* <Route path="list" element={ < Top /> } /> */}
                                {/* <Route path="movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />   */}
                                <Route path="*" element={ <Top /> } />
                            </Route>                          
                            <Route path="movies-coming" element={<Soon />} > 
                                {/* <Route path="list" element={ < Soon /> } />  */}
                                {/* <Route path="movie/:id" element={ <ModalMovieDetails showModal={true} /> } /> */}
                                <Route path="*" element={ <Soon /> } />                          
                            </Route>
                            <Route path="top-rated-india" element={ < TopIndian /> } >
                                {/* <Route path="list" element={ < TopIndian /> } /> */}
                                {/* <Route path="movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />   */}
                                <Route path="*" element={ <TopIndian /> } />
                            </Route>
                            <Route path="favourit" element={ < Favs /> } >
                                {/* <Route path="list" element={ < Favs /> } /> */}
                                {/* <Route path="movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />   */}
                                <Route path="*" element={ <Favs /> } />                                
                            </Route>
                             
                            <Route path="*" element={<NoPageFound/>}/>    
                            <Route path="/:categoryType/movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />                         
                        </Route>  
                       
                        {/* <Route path="/:categoryType/movie/:title/year/:year" children={ <TopModalMovieDetails showModal={true} /> } />                       */}
                    </Routes>
                    {/* <Routes>                        
                        <Route path="/:categoryType/movie/:title/year/:year" element={ <TopModalMovieDetails showModal={true} /> } />                         
                    </Routes> */}
                </Router>
            </ErrorBoundary>
        </>
     );
}
 
export default App;