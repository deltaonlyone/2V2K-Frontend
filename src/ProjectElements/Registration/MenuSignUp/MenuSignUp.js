import React, {useState} from 'react';
import styles from './MenuSignUp.module.css';
import logo from "../../../photos/Snavvy_Logo/Snavvy_logo_White.svg";
import {FormInputSign} from "../../Forms/FormInputSign/FormInputSign";

import {useSelector} from 'react-redux';

export function MenuSignUp(props) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const currentTheme = useSelector(state => state.currentTheme);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        const data = { email, username, password };

        try {
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const result = await response.json();
            console.log('Registration successful:', result);
            // Handle successful registration (e.g., redirect to login)
        } catch (error) {
            console.error('Error during registration:', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <nav className={`${styles['container']}`} onClick={props.handleToggleSignUp}>
            <div className={`${styles['menu']} ${currentTheme.signInMenuBackground}`}
                 onClick={(e) => e.stopPropagation()}>

                <button className={`${styles['backButton']} ${currentTheme.backButtonColor}`}
                        onClick={props.handleToggleSignUp}></button>

                <img className={`${styles['logo']} ${currentTheme.svgColor}`} src={logo} alt=""/>

                <a className={`${styles['signInText']} ${currentTheme.textColor}`}>Sign up</a>

                <form className={`${styles['inputForm']} ${currentTheme.inputFormColor}`} onSubmit={handleSubmit}>
                    <FormInputSign
                        height={'43px'}
                        width={'100%'}
                        text={'Email address'}
                        type="email"
                        onChange={ setEmail}
                    />

                    <FormInputSign
                        height={'43px'}
                        width={'100%'}
                        text={'Username'}
                        type="text"
                        onChange={setUsername}
                    />

                    <FormInputSign
                        height={'43px'}
                        width={'100%'}
                        text={'Password'}
                        type="password"
                        onChange={setPassword}
                    />

                    <FormInputSign
                        height={'43px'}
                        width={'100%'}
                        text={'Repeat password'}
                        type="password"
                        onChange={setRepeatPassword}
                    />

                    {error && <div className={styles['errorText']}>{error}</div>}

                    <button type="submit" className={`${styles['submitButton']} ${currentTheme.buttonSignInColor}`}>
                        Sign up
                    </button>
                </form>
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
