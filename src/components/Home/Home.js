import { useState, useEffect }  from 'react';

import BlogList from '../BlogList/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'Outwitting Squirrels',
            body: 'Lorem ipsum...',
            author: 'Jack Heise',
            id: 1
        },
        {
            title: 'Talking with Trees',
            body: 'Lorem ipsum...',
            author: 'P. L. McSweeny',
            id: 2
        },
        {
            title: 'A Passion for Donkeys',
            body: 'Lorem ipsum...',
            author: 'Dr. Elisabeth Svendson',
            id: 3
        }
    ]);

    const handleDelete = ( id ) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    //runs whenever the dom renders
    //dont change state inside bc of cont' loop effect
    useEffect( () => {
        console.log('useEffect RAN!')
    })
    

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