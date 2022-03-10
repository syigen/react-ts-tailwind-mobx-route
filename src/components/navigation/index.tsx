import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={"m-4 bg-yellow-300 flex space-x-2"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
export default Navigation;