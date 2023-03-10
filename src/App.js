import React from "React";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <footer>
        <Weather />
        This project created by Olha Kolisnyk{" "}
        <a href="https://github.com/Olha1304/react-5.git">
          open-sourced in GitHub{" "}
        </a>
        and{" "}
        <a href="https://dynamic-banoffee-75a1c5.netlify.app">
          hosted by Netlify
        </a>
      </footer>
    </div>
  );
}
