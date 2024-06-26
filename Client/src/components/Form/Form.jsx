import styles from "../Form/Form.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../utils/validation";
import gif from "../../img/portal.gif"

export default function Form({ login }) {

  const navigate = useNavigate();
    
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

    const registrer = () => {
      navigate("/registrer")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <h className={styles.signin}>SIGN IN</h>
                <label className={styles.labelEmail}>Email</label>
                <input
                    className={styles.email}
                    type="email"
                    onChange={handleChange}
                    value={userData.email}
                    name="email"
                />
                {errors.email ? <p className={styles.error_Email}>{errors.email}</p> : <p className={styles.error_Email}>...</p>}
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
                {errors.password ? <p className={styles.error_Pass} >{errors.password}</p> : <p className={styles.error_Pass}>...</p>}
            </div>
            <button className={styles.submit} type="submit">LOGIN</button>
            <button className={styles.sign} type="button" onClick={registrer}>sign up</button>

            <img className={styles.gif} src={gif} alt="" />
        </form>
    );
}
