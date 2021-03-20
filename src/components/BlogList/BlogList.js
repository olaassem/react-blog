const BlogList = ( props ) => {
    const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {props.blogs.map(blog => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
     )
}
 
export default BlogList;