import React from 'react';
import styles from './styles.module.css';

const Bottom = (props) => {
    return <>
        <img className={styles.bottom} src={`./images/bottoms/${props.image}.png`} onClick={props.changeBottom} />
    </>;
}

export default Bottom;