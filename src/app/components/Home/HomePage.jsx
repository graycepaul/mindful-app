import { LandingPage } from "./LandingPage/LandingPage";
import { Footer } from "./Footer/Footer";
import { Features } from "./Features/Features";
import { Header } from "./Header/Header";
import { Articles } from "./Articles/Articles";
import { Location } from "../Location/Map";

export function Homepage({ toggleTheme, theme, toggleLocale, locale }) {
  return (
    <div>
      <header>
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          toggleLocale={toggleLocale}
          locale={locale}
        />
      </header>
      <main>
        <LandingPage />
        <Features toggleLocale={toggleLocale} locale={locale} />
        <Articles toggleLocale={toggleLocale} locale={locale} />
        <Location toggleLocale={toggleLocale} locale={locale} />
      </main>
      <footer>
        <Footer toggleLocale={toggleLocale} locale={locale} />
      </footer>
    </div>
  );
}
