import React, { useState } from "react";
import "./Login.css";

let Login = ({ setUser }) => {
    const[name,setName] = useState(null);
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        localStorage.setItem("user",name)
        setUser(name);
    };
    return(
        <div className="login-container">
        <h1>procrastination Tracker</h1>
        <p className="head-2">Why procrastination Matters?</p>
        <p>
            Procrastination often starts with just a few minutes of distraction, but it quickly turns into hours of lost time. Without realizing it, important tasks get delayed and deadlines become stressful. This app helps you track your wasted time and become more aware of your daily habits.
        </p>
        <p>
            Many students plan to study but get distracted by phones, social media, or entertainment. What feels like a short break becomes hours of delay. This app helps you track your wasted time and improve your focus.
        </p>
        <form onSubmit={handlesubmit}>
            <h2>Enter your name</h2>
            <input type="text" placeholder="enter your name"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
        <button type="submit">Start</button>
        </form>
        </div>
    )
}
export default Login;