import React, {useState} from 'react';
import styles from './SinglePhoto.module.css';

import {useSelector} from 'react-redux';

export function SinglePhoto(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    return (

        <img
            src={props.img}
            alt="Photo"
            className = {`${styles['photoImg']}`}
        />

    );
}