import { useState } from "react";
import "./App.css";
import "./style.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className= "Extensions">
      <img src="../assets/images/logo.svg" alt=""></img>
      <img src="../assets/images/icon-moon.svg" alt="" class="moon"></img>
    </div>

    <div className="List">
      <h2 className = "Extensions_List">
        Extensions List
        <button className="Buttons">All</button>
        <button className="Buttons">Active</button>
        <button className="Buttons">Inactive</button>
      </h2>
    </div>

    <div class="Container">

      <div class="DevLens">
        <img src="../assets/images/logo-devlens.svg" alt=""></img>
        <div>
          <h4>DevLens</h4>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-style-spy.svg" alt=""></img>
        <div>
          <h4>StyleSpy</h4>
          <p>Instantly analyze and copy CSS from any webpage element.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-speed-boost.svg" alt=""></img>
        <div>
          <h4>SpeedBoost</h4>
          <p>Optimizes browser resource usage to accelerate page loading.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-json-wizard.svg" alt=""></img>
        <div>
          <h4>JSONWizard</h4>
          <p>Formats, validates, and prettifies JSON responses in-browser.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-tab-master-pro.svg" alt=""></img>
        <div>
          <h4>TabMaster Pro</h4>
          <p>Organizes browser tabs into groups and sessions.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-viewport-buddy.svg" alt=""></img>
        <div>
          <h4>ViewportBuddy</h4>
          <p>Simulates various screen resolutions directly within the browser.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-markup-notes.svg" alt=""></img>
        <div>
          <h4>Markup Notes</h4>
          <p>Enables annotation and notes directly onto webpages for collaborative debugging.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-grid-guides.svg" alt=""></img>
        <div>
          <h4>GridGuides</h4>
          <p>Overlay customizable grids and alignment guides on any webpage.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-palette-picker.svg" alt=""></img>
        <div>
          <h4>Palette Picker</h4>
          <p>Instantly extracts color palettes from any webpage.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-link-checker.svg" alt=""></img>
        <div>
          <h4>LinkChecker</h4>
          <p>Scans and highlights broken links on any page.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-dom-snapshot.svg" alt=""></img>
        <div>
          <h4>DOM Snapshot</h4>
          <p>Capture and export DOM structures quickly.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>

      <div class="DevLens">
        <img src="../assets/images/logo-console-plus.svg" alt=""></img>
        <div>
          <h4>ConsolePlus</h4>
          <p>Enhanced developer console with advanced filtering and logging.</p>
        </div>
        <button class="Remove">Remove</button>
      </div>
    
    </div>

    <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
    </footer>
    </div>
  );
}

export default App;