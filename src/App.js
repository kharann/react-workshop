import React from "react";
import "./App.css";
import styled from "styled-components";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <MainContent>
      </MainContent>
    </div>
  );
}

const MainContent = styled.main`
  max-width: 1000px;
  margin-top: 20px;
`;

export default App;
