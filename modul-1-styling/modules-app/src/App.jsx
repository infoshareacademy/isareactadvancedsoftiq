import { AboutUs } from "./components/AboutUs";
import { SiteHeader } from "./components/SiteHeader";
import { Services } from "./components/Services";
import { Fresh } from "./components/Fresh";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <SiteHeader />
      <Fresh />
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
}

export default App;
