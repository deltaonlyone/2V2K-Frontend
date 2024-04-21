import React, {useState} from 'react';
import styles from './MenuSignUp.module.css';
import logo from "../../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import {FormInput} from "../../Forms/FormInput/FormInput";

import {useSelector} from 'react-redux';

export function MenuSignUp(props) {
    // const [usernameOrEmail, setUsernameOrEmail] = useState('');
    // const [password, setPassword] = useState('');
    //
    // const handleSubmit = () => {
    //     const formData = {
    //         usernameOrEmail: usernameOrEmail,
    //         password: password
    //     };
    //     fetch('http://localhost:8080/api/auth/authenticate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Authentication failed');
    //             }
    //             return response.headers.get('X-Authentication');
    //         })
    //         .then(data => {
    //             localStorage.setItem('token', data);
    //             props.handleToggleSign()
    //         })
    //         .catch(error => {
    //             console.error('Authentication error:', error);
    //         });
    // };

    const currentTheme = useSelector(state => state.currentTheme);

    return (
        <nav className={`${styles['container']} `} onClick={props.handleToggleSignUp}>
            <div className={`${styles['menu']} ${currentTheme.signInMenuBackground}`}
                 onClick={(e) => e.stopPropagation()}>

                <button className={`${styles['backButton']} ${currentTheme.backButtonColor}`}
                        onClick={props.handleToggleSignUp}></button>

                <img className={`${styles['logo']} ${currentTheme.svgColor}`} src={logo} alt=""/>

                <a className={`${styles['signInText']} ${currentTheme.textColor}`}>Sign up</a>

                <div className={`${styles['inputForm']} ${currentTheme.inputFormColor}`}>


                </div>
                <div className={`${styles['createAccountText']} ${currentTheme.inputFormColor}`}>
                    <a className={`${styles['textAccountLeft']} ${currentTheme.textColor}`}>
                        Already have an account?
                    </a>

                    <a className={styles['textAccountRight']}
                       onClick={(e) => {
                           props.handleToggleSignUp();
                           props.handleToggleSign();
                       }}
                    >
                        Log In
                    </a>

                </div>
                <div className={styles['informationText']}>
                    <a className={styles['textBottom']}>
                        Privacy Policy
                    </a>

                    <a className={styles['textBottom']}>
                        Terms of Use
                    </a>
                </div>


            </div>
        </nav>
    );
}
