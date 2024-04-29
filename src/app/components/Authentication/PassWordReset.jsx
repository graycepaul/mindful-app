// import React, { useState } from "react";
// import style from "./auth.module.css";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Button } from "../Buttons/Buttons";
// import { Logo } from "../Home/Header/Header";

// export function PasswordReset() {
//   const navigate = useNavigate();
//   const [resetCode, setResetCode] = useState("");

//   const handleResetPassword = (e) => {
//     e.preventDefault();

//     navigate("/community");
//   };

//   return (
//     <div className={style.body}>
//       <ToastContainer />
//       <div className={`${style.form} ${style.passwordReset}`}>
//         <Logo />
//         <div className={style.formCard}>
//           <h1>Great, let’s verify your account</h1>
//           <p className={style.verificationCode}>
//             We sent a code to youremail@gmail.com -- It helps us keep your
//             account secure
//           </p>
//           <form onSubmit={handleResetPassword}>
//             <div className={style.resetCode}>
//               <input
//                 type="number"
//                 id="resetCode1"
//                 name="resetCode1"
//                 maxLength={1}
//               />
//               <input
//                 type="number"
//                 id="resetCode2"
//                 name="resetCode2"
//                 maxLength={1}
//               />
//               <input
//                 type="number"
//                 id="resetCode3"
//                 name="resetCode3"
//                 maxLength={1}
//               />
//               <input
//                 type="number"
//                 id="resetCode4"
//                 name="resetCode4"
//                 maxLength={1}
//               />{" "}
//               <input
//                 type="number"
//                 id="resetCode5"
//                 name="resetCode5"
//                 maxLength={1}
//               />
//               <input
//                 type="number"
//                 id="resetCode6"
//                 name="resetCode6"
//                 maxLength={1}
//               />
//             </div>

//             <Button type="submit" name="Continue" />
//           </form>
//         </div>
//         <p>
//           Didn't receive any code? <a href="signup">Resend Code</a>
//         </p>
//       </div>
//     </div>
//   );
// }
