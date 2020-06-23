import React from "react";

import ButtonGrid from "./components/ButtonGrid";
import SlideFooter from "./components/SlideFooter";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h3 className="title">What are your main areas of focus?</h3>
        <p className="subtitle">
          This will help us build a personalized experience for you
        </p>
      </header>
      <main>
        <ButtonGrid
          buttons={[
            "Blood Glucose",
            "Medication",
            "Food Tracking",
            "Exercise",
            "Weight Management",
            "Blood Pressure",
            "A1C"
          ]}
        />
      </main>
      <footer>
        <SlideFooter count={5} />
      </footer>
    </div>
  );
}

export default App;
