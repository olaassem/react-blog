import { useState, useEffect }  from 'react';

import BlogList from '../BlogList/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState( null );

    const handleDelete = ( id ) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    //runs after every render
    //dont change state inside bc of cont' loop effect
    //an empty array : if only want to run the function once on the 1st render
    useEffect( () => {
        console.log( 'useEffect RAN!' )
    }, [ ])
    

    return ( 
        <div className="home">
            <BlogList 
                blogs={ blogs }  
                title="All Blogs!"
                handleDelete={ handleDelete } 
            />
        </div>
     );
}
 
export default Home;