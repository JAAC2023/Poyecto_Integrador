import styles from "../Form/FormRegistrer.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../utils/validation";
import gif from "../../img/portal.gif"

export default function FormRegistrer({ postUser }) {

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

    console.log(errors.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
          errors.email === "Debe ser un email valido" ||
          errors.email === "Debe tener menos de 35 caracteres" ||
          errors.password === "Debe tener una longitud entre 6 y 10 caracteres"||
          errors.password === "Debe contener al menos un numero"
      ) {
          window.alert("Algo anda mal");
      } else {
          postUser(userData);
      }
    };

    
    const login = () => {
      navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <h className={styles.signin}>SIGN UP</h>
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
            <button className={styles.back} type="button" onClick={login}>back</button>
            <button className={styles.submit} type="submit">submit</button>

            <img className={styles.gif} src={gif} alt="" />
        </form>
    );
}
