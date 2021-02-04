import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Loading from '../loading/Loading';
import RickRoll from '../../assets/images/rickroll.jpg';

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
      console.log(this.state.data)
      if (!this.state.data.id) {
          return (
              <div>
                  <img src={RickRoll} height="200px"/>
              </div>
          )
      }
    return (
      <div className="randomQuestion">
            <div id="randomQuestion">
                <em>Question:</em> <strong>{this.state.data.question}</strong>
            </div>
            <div id="randomCategory" key={this.state.data.category_id}>
                <em>Category: </em><strong>{this.state.data.category.title}</strong>
            </div>
            
            <div className="randomPoints">
                <em>Points: </em><strong>{this.state.data.value}</strong>
            </div>
        
      </div>
    );
  }
}
export default Jeopardy;

// TODO for Normal Mode
/* 

    //[D] Update the navigation and router of your application to display the new component
    //Display the question, category, and point value returned from the API
    !Create a way to keep track of the user's score
    Provide a way for the user to submit an answer to the question
    If the answer is correct then add the point value of the question to the user's score.
    If the answer is wrong, subtract the point value from the user's score.
    After the user answers a question display another random question from the API.
*/
//Adding this to the JSX displays all values pulled from API 
//  {JSON.stringify(this.state.data.prop)}

// TODO for Medium Mode
/*


    Create a stateless display component for the Jeopardy game that handles the display of the game

    Update the Jeopardy component to only render the new display component

    Pass the needed props from the Jeopardy component to the display component so it has all the data it needs to display the game data and submit the user's answer

    The other should all the display of the data through passed in props.

*/

// TODO for Hard Mode
/*

    Instead of displaying a single random question, display 3 categories.
    Once a user selects a category, display the question for the category selected
    -----The rest of the application should work the same

*/