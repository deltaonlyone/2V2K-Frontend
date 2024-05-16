import React, {useState} from 'react';
import styles from './FormButtonBlueLink.module.css';

import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";

export function FormButtonBlueLink(props) {
    const currentTheme = useSelector(state => state.currentTheme);

    const customStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <Link to={props.link} className={`${styles['linkStyle']}`}>
            <button className={`${styles['formButton']} ${currentTheme.formButtonColor}`}
                    style={customStyle}
            >
                {props.text}
            </button>
        </Link>
    );
}