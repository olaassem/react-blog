import { useParams } from "react-router";

const BlogDetails = () => {
    //grab route parameters from the route.
    //we defined :id in the App.js blogdetails route:
    const { id } = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;