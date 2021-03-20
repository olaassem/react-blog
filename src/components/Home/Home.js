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

    const [name, setName] = useState('Mario');

    const handleDelete = ( id ) => {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    //runs after every render
    //dont change state inside bc of cont' loop effect
    //an empty array : if only want to run the function once on the 1st render
    //
    useEffect( () => {
        console.log( 'useEffect RAN!' )
        console.log( name )
    }, [ name ])
    

    return ( 
        <div className="home">
            <BlogList 
                blogs={ blogs }  
                title="All Blogs!"
                handleDelete={ handleDelete } 
            />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;