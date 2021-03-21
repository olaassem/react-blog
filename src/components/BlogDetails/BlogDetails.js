import { useParams } from "react-router";
import useFetch from '../../customHooks/useFetch';

const BlogDetails = () => {
    //grab route parameters from the route.
    //we defined :id in the App.js blogdetails route:
    const { id } = useParams();

    const { data: blog, error, isLoading } = useFetch( "http://localhost:8000/blogs/" + id );
    return ( 
        <div className="blog-details">
            { isLoading && <div>Is Loading</div>  }
            { error && <div>{ error }</div>  }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;