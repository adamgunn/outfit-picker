import React from 'react';
import styles from './styles.module.css';

const Sock = (props) => {
    return <>
        <img className={styles.sock} src={`./images/socks/${props.image}.png`} onClick={props.changeSock} />
    </>;
}

export default Sock;