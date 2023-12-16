import SearchLocation from "../components/SearchLocation";
import styles from "../Main.module.css";
import Logo from "../components/Logo";
import {Link} from "react-router-dom";

function Main() {

    return (
        <div className={styles.main}>
            <Logo />
            <Link to="/location" style={{ textDecoration: "none"}}>
                <SearchLocation/>
            </Link>
        </div>
    );
}

export default Main;