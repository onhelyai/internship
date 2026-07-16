import { useState } from "react";
import "./App.css";
import "./style.css";
import ExtensionCard from "./ExtensionCard.jsx";
import data from "./data.json"

function App() {

  const[filter, setFilter] = useState("all");

  const filteredData = data.filter((extension) => {
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
  
  return (
    <div>
      <div className= "Extensions">
      <img src="/assets/images/logo.svg" alt=""></img>
      <img src="/assets/images/icon-moon.svg" alt="" class="moon"></img>
    </div>

    <div className="List">
      <h2 className = "Extensions_List">
        Extensions List
        <button className="Buttons" onClick={() => setFilter("all")}>All</button>
        <button className="Buttons" onClick={() => setFilter("active")}>Active</button>
        <button className="Buttons"onClick={() => setFilter("inactive")}>Inactive</button>
      </h2>
    </div>

    <div className="Container">
      {filteredData.map((extension) => (
        <ExtensionCard
          key = {extension.name}
          logo = {extension.logo}
          name = {extension.name}
          description = {extension.description}
          isActive = {extension.isActive}
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