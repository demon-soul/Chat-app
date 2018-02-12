import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props)
  	this.toggleView = this.toggleView.bind(this);

  }
  toggleView=()=>{
  	const {show} = this.state;
  	this.setState({show:!show})
  }		
  render() {

    return (
    	<div>
        <div className="info">
              <h2>Vline BroadBand</h2>
        </div>

        <div className="contact">
          <p>Contact Us at:</p>
          <p>Mobile:9146571999</p>
          <p>Email:www.vline.com</p>
        </div>
    		<Chat/>
    		
      </div>	
    );
  }
}

export default App;
