import React from 'react';
import './App.css';

class App extends React.Component {
  state ={a:0, imgSrc:"/moi.jpg", fullName:"Yassine Seltene",i:0, bio:"Je suis un développeur Web fullstack js", 
  profession:"ingénieur développeur web", isShow:true};
  hide=()=>this.setState({isShow: !this.state.isShow }); 
  
 componentDidMount(){
  setInterval
 ( ()=>{this.setState({a: this.state.a+1})}, 1000   );
} 

  
  render(){
    
    return (
    <div className="App">
    <button onClick={this.hide}> Hide </button>
      {this.state.isShow && (<div><h2> My name is: {this.state.fullName}</h2>
      <h2> My bio : {this.state.bio}</h2>
      <p> <img src={this.state.imgSrc} alt={this.state.fullName}/> </p>
      <h2> My profession: {this.state.profession}</h2></div>)}
      <p> Temps écoulé: {this.state.a} secondes</p>
    </div>
  );
}}

export default App;
