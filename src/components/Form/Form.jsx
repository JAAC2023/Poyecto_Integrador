import { useState } from "react";
import validation from "../../utils/validation";

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        // name -> email password
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
            <label>Email</label>
            <input
            type="mail"
            onChange={handleChange}
            value={userData.email}
            name="email"
            />
            {errors.email ? <p>{errors.email}</p> : <p></p>}
        </div>
        <div>
            <label>Password</label>
            <input
            type="password"
            onChange={handleChange}
            value={userData.password}
            name="password"
            />
            {errors.password ? <p>{errors.password}</p> : <p></p>}
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}
