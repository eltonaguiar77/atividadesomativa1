import React, {Component} from "react";

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      titulo: "Primeira página com Class Component"
    }

    this.mudar = this.mudar.bind(this);
  }

  mudar(){
    console.log("Mudou");
    var novoTitulo = "Aprendi a usar Class Component";
    this.setState({titulo:novoTitulo});
  }

  render(){
    return(
      <div>
        <h1> {this.state.titulo} </h1>
        <button onClick={this.mudar}>Mudar título</button>
      </div>
    )
  }
}

export default App;
