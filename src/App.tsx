import React from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Layout from "./Layout";
import Router from "./routes/Router";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
