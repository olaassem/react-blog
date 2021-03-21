import { useState, useEffect }  from 'react';

const useFetch = ( url ) => {

    const [ data, setData ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( null );
    const [ error, setError ] = useState( null );

    //runs after every render
    //dont change state inside bc of cont' loop effect
    //an empty array : if only want to run the function once on the 1st/initial render and NOT whenever it renders.

    //place cleanup function inside useeffect and return it
    useEffect( () => {
        //associate it w a specific fetch controller to stop the fetch using the signal property
        const abortCont = new AbortController();

        fetch( url,  { signal: abortCont.signal } )
        //check if res is not ok (something wrong w data)
            .then( res => {
                if ( !res.ok ) {    
                    throw Error('Could not fetch data for that resource.');
                }
                // console.log(res)
                return res.json();
            })
            .then(( data ) => {
                // console.log( data );
                setData( data );
                setIsLoading( false );
                setError( null );

            })
            .catch( err => {
                // console.log(err.message);
                setIsLoading( false );
                setError( err.message );
            });

            //aborts whatever fetch it is associated with
            return () => abortCont.abort();

            //add url as a dependency to useEffect: whenever url changes, run data again
    }, [ url ])

    //return whatever values you want in custom hooks
    //prefer to use objects bc then the order of the values don't matter when destructuring them.
    return { data, isLoading, error };
};

export default useFetch;