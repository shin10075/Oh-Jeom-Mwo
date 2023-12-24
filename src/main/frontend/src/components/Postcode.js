import React, {useState} from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styles from "../Location.module.css";

const Postcode = (props) => {
    const open = useDaumPostcodePopup();

    const [address, setAddress] = useState("");

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress(fullAddress);
        props.updateAddress(fullAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete, width: 500, height:600 });
    };

    return (
        <input onClick={handleClick} className={styles.searchBar} placeholder="위치를 입력하세요" value={address} readOnly/>
    );
};

export default Postcode;