import React, { useContext } from "react";
import CardsSection from "./components/CardsSection";
import Chart from "./components/Chart";
import { AppContext } from "./components/context";

function App() {
  const { data } = useContext(AppContext);

  console.log(data);

  return (
    <div className="App">
      <CardsSection />
      <Chart />
    </div>
  );
}

export default App;
