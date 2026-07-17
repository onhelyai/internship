import { useState } from "react";
import "./App.css";
import "./style.css";
import ExtensionCard from "./components/ExtensionCard.jsx";
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
        extension.name === name ? { ...extension, isActive: !extension.isActive } : extension
      )
    );
  };

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((extension) => extension.name !== name));
  };

  return (
    <div className={isDark ? "dark" : "light"}>
    <div>
      <div className= "Extensions">
        <img src="/assets/images/logo.svg" alt=""></img>
        <img src={isDark ? "/assets/images/icon-moon.svg" : "/assets/images/icon-sun.svg"} 
          alt="" className="moon" onClick={()=>setIsDark(!isDark)}></img>
      </div>

    <div className="List">
      <h2 className = "Extensions_List">
        Extensions List
        <button className="Buttons" onClick={() => setFilter("all")}>All</button>
        <button className="Buttons" onClick={() => setFilter("active")}>Active</button>
        <button className="Buttons" onClick={() => setFilter("inactive")}>Inactive</button>
      </h2>
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
    </div>

    <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
    </footer>
    </div>
  );
}

export default App;