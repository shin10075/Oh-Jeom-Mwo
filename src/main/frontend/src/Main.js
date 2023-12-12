import "./App.css";
import SearchLocation from "./SearchLocation";

function Main() {

    return (
        <div className="main">
            <div className="ojmLogo">
                <img className="mainLogo" alt="ojmLogo" src="img/logo.png"/>
            </div>
            <SearchLocation/>
        </div>
    );
}

export default Main;