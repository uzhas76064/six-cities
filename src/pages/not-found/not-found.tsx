import {Link} from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
  <div className="error-container">
    <h1> 404 </h1>
    <p>
      Oops! The page you're
      looking for is not here.
    </p>
    <Link to="/">
      Go Back to Home
    </Link>
  </div>
  )
}

export default NotFound;
