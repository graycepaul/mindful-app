import { LandingPage } from "./LandingPage/LandingPage";
import { Footer } from "./Footer/Footer";
import { Features } from "./Features/Features";
import { Header } from "./Header/Header";
import { Tips } from "./HealthTips/HealthTips";
import { Location } from "../Location/Map";

export function Homepage({ toggleTheme, theme }) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <LandingPage />
      <Features />
      <Tips />
      <Location />
      <Footer />
    </div>
  );
}
