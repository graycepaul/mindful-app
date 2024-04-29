import React, { useState } from "react";
import style from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./context/fireBase";
import { Button } from "../Buttons/Buttons";
import { Logo } from "../Home/Header/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed up
      const user = userCredential.user;
      console.log(user);
      toast.success("Sign up successful! Please login.");
      navigate("/community");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      toast.error(errorMessage);
    }
    setPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={style.body}>
      <ToastContainer />
      <div className={`${style.form} ${style.signUp}`}>
        <Logo />
        <div className={style.formCard}>
          <form onSubmit={onSubmit}>
            <div className={style.fullName}>
              <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter First Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="surname">Surname:</label>
                <br />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter Surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="emailAddress">Email:</label>
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
              <label htmlFor="gender">Gender:</label>
              <br />
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className={style.countryCode}>
              <div className={style.code}>
                <label htmlFor="code">Code:</label>
                <br />
                <input
                  type="number"
                  id="code"
                  name="code"
                  placeholder="+234"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className={style.number}>
                <label htmlFor="number">Phone Number:</label>
                <br />
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className={style.password}>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type={showPassword ? "password" : "text"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className={style.cache}>
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">
                I agree to <Link to="./terms">Terms & Conditions</Link> and{" "}
                <Link to="./terms">Privacy Policy</Link>
              </label>
            </div>
            <Button type="submit" name="Sign Up" />
          </form>
        </div>
        <p className={style.authRoute}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
