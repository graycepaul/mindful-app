import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./context/fireBase";
import style from "./auth.module.css";
import { Button } from "../Buttons/Buttons";
import { Logo } from "../Home/Header/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");
  const [rememberMe, setRememberMe] = useState("false");

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

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={style.body}>
      <ToastContainer />
      <div className={`${style.form} ${style.signIn}`}>
        <Logo />
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

            <div className={style.password}>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className={style.cache}>
              <input
                type="checkbox"
                id="cache"
                name="cache"
                onChange={(e) => setRememberMe(e.target.value)}
              />
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
