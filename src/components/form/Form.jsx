import { useState } from 'react';
import axios from 'axios';
import Button from '../button/Button';
import styles from './form.module.css';

const Form = () => {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');

    const url = import.meta.env.VITE_API_URL;


    const sendRequest = async (e) => {
        e.preventDefault();
        if (!number || !amount) {
            return alert('Please fill in all fields');
        }

        try {
            const response = await axios.post(url, {
                number,
                amount
            });
            setResult(response.data.message);
        } catch (error) {
            setResult(error.response.data.message);
        }
    }


    return ( 
        <form className={styles.form} onSubmit={sendRequest}>
            <span className={styles.title}>Make Payment</span>
            <fieldset className={styles.fieldset}>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="number">+254</label>
                    <input 
                        className={styles.input} 
                        onChange={(e) => setNumber(e.target.value)} 
                        value={number} 
                        type="tel" 
                        name="number" 
                        id="number" 
                        placeholder="Enter your number" 
                    />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="amount">Ksh.</label>
                    <input 
                        className={styles.input} 
                        onChange={(e) => setAmount(e.target.value)} 
                        value={amount} 
                        type="number" 
                        id="amount" 
                        name="amount" 
                        placeholder="Enter amount" 
                    />
                </div>
                <Button type='submit'/>
            </fieldset>
        </form>
    );
}

export default Form;