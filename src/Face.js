import React from 'react';
import styles from './styles.module.css';

const Face = (props) => {
    return <>
        <img className={styles.face} src={`./images/faces/${props.image}.png`} onClick={props.changeFace} />
    </>;
}

export default Face;