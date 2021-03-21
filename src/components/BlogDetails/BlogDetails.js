import { useParams } from "react-router";
import useFetch from '../../customHooks/useFetch';

const BlogDetails = () => {
    //grab route parameters from the route.
    //we defined :id in the App.js blogdetails route:
    const { id } = useParams();

    const { data, error, isLoading } = useFetch(`http://localhost:3000/blogs/${id}`);
    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;