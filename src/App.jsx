import { useState } from "react";
import Header from "./Header";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("developer");

  return (
    <div className="mx-auto max-w-[34.5rem]">
      <Header selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    </div>
  );
};

export default App;
