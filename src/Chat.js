import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import {ApiAiClient} from 'api-ai-javascript';



class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to the Vline Chat Bot!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

    const client = new ApiAiClient({accessToken: 'ab80cbfeb1da483fadbf46fc4fb994be'})

    .textRequest(newMessage)
        .then((response) => { console.log(response.result.fulfillment.speech);
        	addResponseMessage(response.result.fulfillment.speech);
        })
        .catch((error) => { console.log("error");})

  }



  render() {
    return (

      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Vline"
          subtitle="Vline Chat Bot"
        />
      </div>
    );
  } 
}

export default Chat;