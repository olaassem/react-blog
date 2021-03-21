import useFetch from '../../customHooks/useFetch';
import BlogList from '../BlogList/BlogList';

const Home = () => {


    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { blogs &&  <BlogList blogs={ blogs }  title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;