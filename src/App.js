import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="Cordoba" />
      </main>
      <footer className="Footer mt-3">
        <p>
          <a
            href="https://github.com/Viilhov/dictonary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by Viil Hov Fjøse
        </p>
      </footer>
    </div>
  );
}
