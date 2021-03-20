import { useState }  from 'react';

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

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter( (blog) => blog.author === 'Jack Heise')} title="Squirrels Blogs"/>
        </div>
     );
}
 
export default Home;