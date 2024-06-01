import { LandingPage } from "./LandingPage/LandingPage";
import { Footer } from "./Footer/Footer";
import { Features } from "./Features/Features";
import { Header } from "./Header/Header";
import { Articles } from "./Articles/Articles";
import { Location } from "./Location/Map";

export function Homepage({ toggleTheme, theme, handleLocaleChange, locale }) {
  return (
    <div>
      <header>
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          handleLocaleChange={handleLocaleChange}
          locale={locale}
        />
      </header>
      <main>
        <LandingPage />
        <Features handleLocaleChange={handleLocaleChange} locale={locale} />
        <Articles handleLocaleChange={handleLocaleChange} locale={locale} />
        <Location handleLocaleChange={handleLocaleChange} locale={locale} />
      </main>
      <footer>
        <Footer handleLocaleChange={handleLocaleChange} locale={locale} />
      </footer>
    </div>
  );
}
