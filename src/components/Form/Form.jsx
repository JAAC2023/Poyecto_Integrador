import styles from "../Form/Form.module.css"
import { useState } from "react";
import validation from "../../utils/validation";

export default function Form({ login }) {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setErrors(validation({ ...userData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h className={styles.signin}>SIGN IN</h>
                <label className={styles.labelEmail}>Email</label>
                <input
                    className={styles.email}
                    type="email"
                    onChange={handleChange}
                    value={userData.email}
                    name="email"
                />
                {errors.email ? <p className={styles.error_Email}>{errors.email}</p> : <p>...</p>}
            </div>
            <div>
                <label className={styles.labelPassword}>Password</label>
                <input
                    className={styles.password}
                    type="password"
                    onChange={handleChange}
                    value={userData.password}
                    name="password"
                />
                {errors.password ? <p className={styles.error_Email} >{errors.password}</p> : <p>...</p>}
            </div>
            <button className={styles.submit} type="submit">LOGIN</button>
        </form>
    );
}
