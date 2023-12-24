import styles from "../Main.module.css";

function ChooseBtn() {

    return (
        <div className={styles.chooseBtnBox}>
            <button className={styles.chooseBtn}>질문 선택</button>
            <button className={styles.chooseBtn}>랜덤 뽑기</button>
        </div>
    );
}

export default ChooseBtn;