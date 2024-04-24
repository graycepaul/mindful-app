import React, { useState } from "react";
import style from "./auth.module.css";
import { FaHeartbeat } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./context/fireBase";
import { Button } from "../Buttons/Buttons";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      navigate("/community");
      toast.success("Sign in successful!");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      toast.error(errorMessage);
    }
  };

  // Function to handle forgot password
  const handleForgotPassword = () => {
    // Simulate sending a code to the user's email
    toast.info("We have sent a six-digit code to your email.");
    // Navigate to the password reset page
    navigate("/reset");
  };

  return (
    <div className={style.body}>
      <ToastContainer />

      <div className={`${style.form} ${style.signIn}`}>
        <h2>
          Mindful
          <FaHeartbeat />
        </h2>
        <div className={style.formCard}>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="emailAddress">Address:</label>
              <br />
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={style.cache}>
              <input type="checkbox" id="cache" name="cache" />
              <label htmlFor="cache">Remember me for 30 days</label>
              <button onClick={handleForgotPassword} className={style.resetBtn}>
                Forgot Password?
              </button>
            </div>
            <Button type="submit" name="Login" />
          </form>
        </div>
        <p className={style.authRoute}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
