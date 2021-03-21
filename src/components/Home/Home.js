import { useState, useEffect }  from 'react';

import BlogList from '../BlogList/BlogList';

const Home = () => {
    const [ blogs, setBlogs ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( null );
    const [ error, setError ] = useState( null );
 
    //runs after every render
    //dont change state inside bc of cont' loop effect
    //an empty array : if only want to run the function once on the 1st/initial render and NOT whenever it renders.
    useEffect( () => {
        fetch('http://localhost:8000/blogs')
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
                setBlogs( data );
                setIsLoading( false );
            })
            .catch( err => {
                // console.log(err.message);
                setError(err.message);
            });
    }, [ ])
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { blogs &&  <BlogList blogs={ blogs }  title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;