import styles from "../Location.module.css";
import Postcode from "../components/Postcode";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

function LocationPage() {
    const navigete = useNavigate();

    const [isMouseOn, setIsMouseOn] = useState(false);
    const [address, setAddress] = useState("");

    const handlerMouseOver = () => {
        setIsMouseOn(true);
    }

    const handlerMouseOut = () => {
        setIsMouseOn(false);
    }

    const onPrevious = () => {
        navigete(-1);
    }

    const updateAddress = () => {
        setAddress(address);
    }

    const navigate = useNavigate();

    const handlerClick = () => {
        navigate("/", {
            state : {
                address : address
            }
        });
    }

    return (
        <div className={styles.pageBody}>
            <div className={styles.pageSection}>
                <div className={styles.searchBox}>
                    <div className={styles.previousBtn} onClick={onPrevious}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="39" viewBox="0 0 28 39"
                             fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M27.459 1.43393C28.4452 2.91333 28.0455 4.91214 26.5661 5.89841L6.43876 19.3166L26.5661 32.7348C28.0455 33.7211 28.4452 35.7199 27.459 37.1993C26.4727 38.6787 24.4739 39.0784 22.9945 38.0922L2.86718 24.674C-0.955721 22.1254 -0.95573 16.5078 2.86718 13.9592L22.9945 0.541036C24.4739 -0.445228 26.4727 -0.0454662 27.459 1.43393Z"
                                  fill="#9EE8FE"/>
                        </svg>
                    </div>
                    <Postcode updateAddress={setAddress}/>
                    <div className={isMouseOn? styles.inputBtnHover : styles.inputBtn}
                         onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut}
                        onClick={handlerClick}>입력</div>
                </div>
                <div className={styles.sectionBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1408" height="9" viewBox="0 0 1408 9"
                         fill="none">
                        <path d="M4 4.5H1404" stroke="#D9D9D9" stroke-width="8" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className={styles.allowLocation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.5 8.67188C4.5 4.67875 7.89479 1.5 12 1.5C16.1052 1.5 19.5 4.67875 19.5 8.67188C19.5 10.923 18.2829 13.7082 16.9495 16.1155C15.5954 18.5605 14.0358 20.7631 13.2004 21.8912C13.0627 22.0787 12.8829 22.2314 12.6755 22.337C12.4663 22.4435 12.2348 22.499 12 22.499C11.7652 22.499 11.5337 22.4435 11.3245 22.337C11.1163 22.231 10.9359 22.0776 10.798 21.889C9.96228 20.7599 8.40374 18.5577 7.05043 16.1139C5.71719 13.7064 4.5 10.9214 4.5 8.67188ZM12 3C8.65209 3 6 5.57656 6 8.67188C6 10.5004 7.03281 12.9859 8.36265 15.3872C9.66887 17.746 11.1818 19.886 12 20.9917C12.8181 19.8865 14.3311 17.7473 15.6374 15.3888C16.9671 12.9878 18 10.5021 18 8.67188C18 5.57656 15.3479 3 12 3Z"
                              fill="#12414F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5ZM9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z"
                              fill="#12414F"/>
                    </svg>
                    <span>내위치 불러오기</span>
                </div>
            </div>
        </div>
    );

}

export default LocationPage;