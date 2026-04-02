import React from "react";

export default function App() {
  return (
    <main className="app-shell">
      <div className="drafting-surface" aria-hidden="true" />
      <div className="background-geometry" aria-hidden="true">
        <span className="bg-line bg-line-one" />
        <span className="bg-line bg-line-two" />
        <span className="bg-line bg-line-three" />
        <span className="bg-circle bg-circle-large" />
        <span className="bg-circle bg-circle-small" />
        <span className="bg-arc" />
        <span className="bg-angle" />
      </div>

      <section className="foreground-minimal">
        <p className="site-mark">Miles Low</p>
        <h1>Architectural blueprint notebook.</h1>
        <p className="intro-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est
          at lobortis.
        </p>
      </section>
    </main>
  );
}
