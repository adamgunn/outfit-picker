import React from 'react';
import styles from './styles.module.css'

const Top = (props) => {
    return <>
        <img className={styles.top} src={`./images/tops/${props.image}.png`} onClick={props.changeTop} />
    </>;
}

export default Top;