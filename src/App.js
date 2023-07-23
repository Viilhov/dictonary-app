import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header mt-5 mb-4">
        <h1>Dictonary app</h1>
      </header>
      <main>
        <Dictionary />
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
