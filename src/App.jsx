import { ChakraProvider } from "@chakra-ui/react";
import Header from "./app/Header";
import NavBar from "./app/NavBar";
import LandingSection from "./pages/LandingSection";
import Hero from "./components/card/Hero";
import ProjectsSection from "./pages/ProjectsSection";
import ContactMeSection from "./pages/ContactMeSection";
import Footer from "./app/Footer";
import { AlertProvider } from "./context/alert/alertContext";
import Alert from "./app/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <NavBar />
          <Hero />
          <ProjectsSection />
          <LandingSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
