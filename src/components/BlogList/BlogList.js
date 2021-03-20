const BlogList = ( props ) => {
    // const blogList = props.blogs;
    // // console.log(blogList)

    return ( 
        <div className="blog-list">
            {props.blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
     )
}
 
export default BlogList;