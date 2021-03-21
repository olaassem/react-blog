import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ body, setBody ] = useState('');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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