import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams] = useSearchParams();   
        // const [searchInput, setSearchInput] = useState("");
        // const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
            // e.preventDefault();
            // console.log("here are my search params"+e.target.value);
            // setSearchInput(e.target.value);
        //   };
    useEffect(() => {
        console.log('Location changed');
        searchParams.get("search");
    }, [searchParams]);
        // useEffect(() => {
        //     const params = new URLSearchParams();
    
        //     if (searchInput) {
        //       params.append("search", searchInput);
        //     } else {
        //       params.delete("search");
        //     }
        //     navigate({ search: params.toString() });
        //   }, [searchInput, navigate]);   
    
        
         
    
        const key = searchParams.get("search");
        // const navigate = useNavigate();
        // const query = new URLSearchParams(navigate.arguments);
        console.log(searchParams.get("search"));
        
        // const [value, setValue] = useState("");
        // const {urlChange} = useParams();
     
        // useEffect(() => {
        //     let value = new URLSearchParams(window.location.search).get("query"); 
        //     (value) && setValue(value);
            
        //   }, [ urlChange]);
        return ( 
            //Grab the on change event from the Navbar?
    
            //Take the text and send it to the 
    
            <>
                {/* value  */}
                 {/* <p>{value || "enter the text in input"}</p>; */}
                 {/* <p>{(searchParams)  || "more text"}</p> */}
    
                {(key)  || ""}
    
                 {/* <input type="hidden"  onChange={handleChange}>{searchParams}</input> */}
            </>
         );
    }
     
    export default Search;