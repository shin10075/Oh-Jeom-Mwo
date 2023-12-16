import styles from "../Main.module.css";

function Logo() {

    return (
        <div className={styles.ojmLogo}>
            <img className={styles.mainLogo} alt="ojmLogo" src="img/logo.png"/>
        </div>
    );
}

export default Logo;