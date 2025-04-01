import React, {Component} from "react";

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      mensagem: "Mensagem provisória",
      email: "",
      senha: ""
    }

    this.capturaDados = this.capturaDados.bind(this);
    this.acessar = this.acessar.bind(this);
  }

  capturaDados = e =>{
    console.log(e.target.value);
    this.setState( { [e.target.name]: e.target.value } );
  }

  acessar(){
    console.log("Acessou!");
    var email = this.state.email;
    var senha = this.state.senha;
    if( email == "eltonaguiar@gmail.com" && senha == "123456"){
      this.setState( { mensagem: "Acessado com sucesso!" } );
    } else {
      this.setState( { mensagem: "Usuário ou senha incorretos!" } );
    }
  }

  render(){
    const {emailInput} = this.state;
    const {senhaInput} = this.state;
    return(
      <div>
        <h1>Login</h1>
        <label>
          <input name="email" 
                 value={emailInput}
                 onChange={this.capturaDados} /><br></br>
          <input name="senha" 
                 value={senhaInput}
                 onChange={this.capturaDados}/><br></br>
          <button onClick={this.acessar}>Acessar</button>
        </label>
        <h4> { this.state.mensagem } </h4>
      </div>
    )
  }
}

export default App;
