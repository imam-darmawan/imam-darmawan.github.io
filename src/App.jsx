import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Works from "./Works";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("developer");

  return (
    <div className="mx-auto max-w-[34.5rem]">
      <Header selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
      <main>
        <About selectedRole={selectedRole} />
        <Works selectedRole={selectedRole} />
      </main>
      <footer className="mt-16">
        <small className="block text-center text-xs text-stone-500">
          &copy; Imam Darmawan
        </small>
      </footer>
    </div>
  );
};

export default App;
