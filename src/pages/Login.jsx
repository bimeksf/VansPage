import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [status, setStatus] = useState("idle");

    const navigate = useNavigate(); 

    function handleForm(e) {
        e.preventDefault();
        setStatus("submitting");

        // test loggin
        if (loginData.email === "tes" && loginData.password === "test") {
            localStorage.setItem("loggedin", true);
            setStatus("idle");
            navigate("/dashboard"); 
        } else {
            alert("Invalid email or password");
            setStatus("idle");
        }
    }

    function handleChange(e) {
        setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div>
            <form onSubmit={handleForm}> 
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onChange={handleChange} 
                    value={loginData.email} 
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    onChange={handleChange} 
                    value={loginData.password} 
                />
                
                <button type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
