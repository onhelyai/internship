import { useState } from "react";
import "./styles/ExtensionCard.css";
import "./styles/Extensions.css";
import "./styles/List.css";
import ExtensionCard from "./components/ExtensionCard.jsx";
import Extensions from "./components/Extensions.jsx"
import initialData from "./data.json"
import List from "./components/List.jsx";

function App() {

  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(initialData);
  const [isDark, setIsDark] = useState(false);

  const filteredData = extensions.filter((extension) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "active") {
      return extension.isActive;
    }
    if (filter === "inactive") {
      return !extension.isActive;
    }
  });

  const toggleActive = (name) => {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name ? { name: extension.name, logo: extension.logo,
           description: extension.description, isActive: !extension.isActive } : extension
      )
    );
  };

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((extension) => extension.name !== name));
  };

  return (
    <div className={isDark ? "dark" : "light"}>

      <div className="Ext">

        <Extensions
        isDark={isDark}
        Theme={() => setIsDark(!isDark)}
        />

        <List
        filter={filter}
        setFilter={setFilter}
        />
      </div>

      <div className="Container">
        {filteredData.map((extension) => (
          <ExtensionCard
          key={extension.name}
          logo = {extension.logo}
          name = {extension.name}
          description = {extension.description}
          isActive = {extension.isActive}
          onToggle={() => toggleActive(extension.name)}
          onRemove={() => removeExtension(extension.name)}
        />
      ))}

    </div>

    <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
    </footer>
    </div>
  );
}

export default App;