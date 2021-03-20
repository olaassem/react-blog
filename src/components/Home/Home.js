const Home = () => {

    const handleClick = () => {
        console.log('Button clicked!')
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;