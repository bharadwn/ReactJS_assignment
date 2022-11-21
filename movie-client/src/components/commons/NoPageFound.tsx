import { Alert } from "react-bootstrap";

const NoPageFound = () => {
    return ( 
        <>
            <Alert key={'info'} variant={'info'}>
                Error! Something happened. No movie to display.
            </Alert> 
        </>
     );
}
 
export default NoPageFound;