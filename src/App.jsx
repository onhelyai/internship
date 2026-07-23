import { useState } from "react";
import "./style.css";
import "./Buttons.css";
import "./ExtensionCard.css";
import ExtensionCard from "./components/ExtensionCard.jsx";
import Extensions from "./components/Extensions.jsx"
import initialData from "./data.json"

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
        Theme={() => setIsDark(!isDark)}
        />

        <div className="List">
          <h1 className = "Extensions_List">
            Extensions List
          </h1>
          <div className="Buttons_List">
            <button className={filter === "all" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "active" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("active")}>Active</button>
            <button className={filter === "inactive" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("inactive")}>Inactive</button>
          </div>
        </div>
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