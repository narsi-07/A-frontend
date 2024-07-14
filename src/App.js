import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"


const App = () => {
  return (
    <>
     <section className="navbar">
      <img className="logo" src="./img/logo.png" alt="logo" />
      <h2 className="description">Talk to strangers!</h2>
      <h2 className="online"></h2>
    </section>

    <main className="main">
      <section className="conversation"></section>

      <form className="form">
        <button type="button" className="btn start bottom-left-radius" id="start">
          Start
        </button>
        <button type="button" className="btn bottom-left-radius hide" id="stop">
          Stop
        </button>
        <button
          type="button"
          className="btn bottom-left-radius bold hide"
          id="really"
        >
          Really?
        </button>
        <textarea name="text" id="text" className="textarea" disabled></textarea>
        <button
          type="submit"
          id="send"
          className="btn bottom-right-radius"
          disabled
        >
          Send
        </button>
      </form>
    </main>
    </>
  );
};

export default App;
