import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "../../App.css";
import { Homepage } from "./Home/HomePage";
import { SignIn } from "./Authentication/SignIn";
import { SignUp } from "./Authentication/SignUp";
import { Blog } from "./User/Blog/Blogs";
import { AuthProvider } from "./Authentication/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { Community } from "./User/Community/Community";
import { HealthTip } from "./User/HealthTips/HealthTips";
import {
  hausaMessages,
  englishMessages,
  igboMessages,
  yorubaMessages,
} from "./messages";

const ThemeContext = createContext();

function App() {
  const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleLocaleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthProvider>
          <IntlProvider
            messages={
              locale === "ha"
                ? hausaMessages
                : locale === "ig"
                ? igboMessages
                : locale === "yo"
                ? yorubaMessages
                : englishMessages
            }
            locale={locale}
            defaultLocale="en"
          >
            <div className={`app ${theme}`}>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Homepage
                      toggleTheme={toggleTheme}
                      theme={theme}
                      handleLocaleChange={handleLocaleChange}
                      locale={locale}
                    />
                  }
                />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/community" element={<Community />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/tips" element={<HealthTip />} />
              </Routes>
            </div>
          </IntlProvider>
        </AuthProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
