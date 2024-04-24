import React, { useState } from "react";
import style from "./auth.module.css";
import { FaHeartbeat } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Buttons/Buttons";

export function PasswordReset() {
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Perform password reset logic here (e.g., send verification code, verify code, reset password)
    // Upon successful reset, navigate to the "community" page
    navigate("/community");
  };

  return (
    <div className={style.body}>
      <ToastContainer />
      <div className={`${style.form} ${style.passwordReset}`}>
        <h2>
          Mindful
          <FaHeartbeat />
        </h2>
        <div className={style.formCard}>
          <h1>Great, let’s verify your account</h1>
          <p className={style.verificationCode}>
            We sent a code to youremail@gmail.com -- It helps us keep your
            account secure
          </p>
          <form onSubmit={handleResetPassword}>
            <div className={style.resetCode}>
              <input type="number" id="resetCode1" name="resetCode1" />
              <input type="number" id="resetCode2" name="resetCode2" />{" "}
              <input type="number" id="resetCode3" name="resetCode3" />{" "}
              <input type="number" id="resetCode4" name="resetCode4" />{" "}
              <input type="number" id="resetCode5" name="resetCode5" />{" "}
              <input type="number" id="resetCode6" name="resetCode6" />
            </div>
            <Button type="submit" name="Continue" />
          </form>{" "}
        </div>
        <p>
          Didn't receive any code? <a href="signup">Resend Code</a>
        </p>
      </div>
    </div>
  );
}
