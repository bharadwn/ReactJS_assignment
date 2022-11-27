
import { ChangeEvent, useEffect, useState } from "react";
import {
   useNavigate
  
} from "react-router-dom";

const SearchInput = () => {
    const [searchInput, setSearchInput] = useState("");
    // let [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    useEffect(() => {
      console.log("set search input---------"+searchInput);
        const params = new URLSearchParams();

        if (searchInput) {
          params.append("search", searchInput);
        } 
        else {
          params.append("search", searchInput);
        }
        // else {
        //   params.delete("search");
        // }
        navigate({ search: params.toString() });
      }, [searchInput, navigate]);   

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     let result = await submitForm(event.target);
    //     if (result.error) {
    //       setError(result.error);
    //     } else {
    //       navigate('success');
    //     }
    //   }
      
    return ( 
        <>
        {/* <h1>{this.props.title}</h1>
        <hr /> */}
        {/* <input
            type="search"
            placeholder="Search movies"
            value={filterKey}
            onChange={( event ) => filter( event.target.value )}
        /> */}
        {/* <form onSubmit={handleSubmit}> */}
            <input
                type="search"
                value={searchInput}
                onChange={handleChange}
                placeholder="Search..."
            />
        {/* </form> */}
        {/* <ul>
        {
            filteredItems.map( item => <li key={item.id}>{item.name} ({item.platform})</li> )
        }
        </ul> */}


    </>
     );
}
 
export default SearchInput ;