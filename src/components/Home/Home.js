import { useState, useEffect }  from 'react';

import BlogList from '../BlogList/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState( null );

    //runs after every render
    //dont change state inside bc of cont' loop effect
    //an empty array : if only want to run the function once on the 1st/initial render and NOT whenever it renders.
    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then( res => {
                return res.json();
            })
            .then(( data ) => {
                console.log( data );
                setBlogs( data );
            })
    }, [ ])
    

    return ( 
        <div className="home">
            { blogs &&  <BlogList blogs={ blogs }  title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;