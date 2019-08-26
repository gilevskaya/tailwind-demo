import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header flex flex-col sm:flex-row bg-grey-90 p-10">
        <div className="sm:flex-1 p-10">
          <p className="h2 text-grey-10">Some text header</p>
          <p className="p1 text-grey-60 pt-2">
            Some paragraph content here. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className="sm:flex-1 p-10">
          <h2 className="text-grey-10">Also an H2 header</h2>
          <p className="text-grey-60 pt-2">
            With some paragraph under it. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <div className="mt-2">
            <a
              className="App-link p1 font-semibold hover:text-grey-10"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React{" "}
              <span role="img" aria-label="">
                🙂
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
