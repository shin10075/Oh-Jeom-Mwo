import SearchLocation from "../SearchLocation";
import styles from "../Main.module.css";
import Logo from "../components/Logo";

function Main() {

    return (
        <div className={styles.main}>
            <Logo />
            <SearchLocation/>
        </div>
    );
}

export default Main;