import { Link } from "@tanstack/react-router";

const ErrorPage = () => {
  return (
    <div>
      <p>Not found!</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default ErrorPage