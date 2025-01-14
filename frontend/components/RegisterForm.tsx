"use client";
import { useState } from "react";

interface RegisterFormProps {
    onSubmit: (username: string, email: string, password: string) => void;
}

interface FormData {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [data, setData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        const errors: FormErrors = {};

        if (!data.username) {
            errors.username = "Username is required";
        }

        if (!data.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email is invalid";
        }

        if (!data.password) {
            errors.password = "Password is required";
        } else if (data.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (data.password !== data.confirm_password) {
            errors.confirm_password = "Passwords do not match";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(data.username, data.email, data.password);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={data.username}
                    name="username"
                    onChange={handleChange}
                    required
                />
                {formErrors.username && <p>{formErrors.username}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    required
                />
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                    required
                />
                {formErrors.password && <p>{formErrors.password}</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={data.confirm_password}
                    name="confirm_password"
                    onChange={handleChange}
                    required
                />
                {formErrors.confirm_password && <p>{formErrors.confirm_password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
