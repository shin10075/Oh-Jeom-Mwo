import SearchLocation from "./SearchLocation";
import styles from "./Main.module.css";

function Main() {

    return (
        <div className={styles.main}>
            <div className={styles.ojmLogo}>
                <img className={styles.mainLogo} alt="ojmLogo" src="img/logo.png"/>
            </div>
            <SearchLocation/>
        </div>
    );
}

export default Main;