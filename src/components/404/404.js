import { Link } from "react-router-dom"

const notFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to Safety...</Link>
        </div>
    )
}

export default notFound;