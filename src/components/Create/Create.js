const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                />
                <label>Blog body:</label>
                <textarea 
                    required
                >
                </textarea>
                <label>Author:</label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
            </form>
        </div> 
    );
}
 
export default Create;