import SearchLocation from "../components/SearchLocation";
import styles from "../Main.module.css";
import Logo from "../components/Logo";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import ChooseBtn from "../components/ChooseBtn";


function Main() {

    const location = useLocation();

    const [address, setAddress] = useState(location.state?.address);

    return (
        <div className={styles.main}>
            <div className={styles.mainBox}>
                <Logo/>
                <Link to="/location" style={{ textDecoration: "none"}}>
                    <SearchLocation address={address}/>
                </Link>
                {address !== "" ? <ChooseBtn/> : <></>}
            </div>
        </div>
    );
}

export default Main;