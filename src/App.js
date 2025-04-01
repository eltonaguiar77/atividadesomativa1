import React from "react";
import "./App.css"

const Nome = (props) => {
  return(
    <div className="estilo">
      { props.texto }
    </div>
  )
}


function App() {
  return (
    <div>
      <Nome texto="Fridoca Sapeca"/>
      <Nome texto="Giovanna Gualda"/>
    </div>
  );
}

export default App;
