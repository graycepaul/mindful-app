import "../../App.css";
import { Homepage } from "./Home/HomePage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { SignIn } from "./Authentication/SignIn";
import { SignUp } from "./Authentication/SignUp";
import { PasswordReset } from "./Authentication/PassWordReset";
import { Blog } from "./User/Blog/Blogs";
import { AuthProvider } from "./Authentication/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { Community } from "./User/Community/Community";
import { HealthTip } from "./User/HealthTips/HealthTips";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthProvider>
          <div className={`app ${theme}`}>
            <Routes>
              <Route
                exact
                path="/"
                element={<Homepage toggleTheme={toggleTheme} theme={theme} />}
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset" element={<PasswordReset />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/tips" element={<HealthTip />} />
            </Routes>
          </div>
        </AuthProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
