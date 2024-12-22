import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="mx-auto max-w-[34.5rem]">
      <Header />

      <main>
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default App;
