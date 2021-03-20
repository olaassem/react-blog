import { useState }  from 'react';

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

           {blogs.map(blog => (
               <div key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <p>{blog.body}</p>
               </div>
           ))} 

        </div>
     );
}
 
export default Home;