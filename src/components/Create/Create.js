import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ body, setBody ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        }
        console.log(blog);
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={ (e) => setTitle( e.target.value ) }
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={ body }
                    onChange={ (e) => setBody( e.target.value ) }
                >
                </textarea>
                <label>Author:</label>
                <select
                    value={ author }
                    onChange={ (e) => setAuthor( e.target.value ) }
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                <button>Add Blog</button>
                <p>{author}</p>
                <p>{body}</p>
                <p>{title}</p>
            </form>
        </div> 
    );
}
 
export default Create;