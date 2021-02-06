import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: "",
      },
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //handles scores
  handleAnswer = (event) => {
    event.preventDefault();
    console.log(`Form Answer: ${this.state.formData.answer}`);
    console.log(`Data Answer: ${this.state.data.answer}`);
    if (
      this.state.formData.answer.toLowerCase() ===
      this.state.data.answer.toLowerCase()
    ) {
      console.log("Your Answer: Match");
      this.setState((state, props) => {
        return {
          score: state.score + state.data.value,
          formData: {
            answer: "",
          },
        };
      });
    } else {
      console.log("Your Answer: No Match");
      this.setState((state, props) => {
        return {
          score: state.score - state.data.value,
          formData: {
            answer: "",
          },
        };
      });
    }
    this.getNewQuestion();
  };
  
  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category = this.state.data.category && this.state.data.category.title
    return (
      <Display
        data={this.state.data}
        id={this.state.data.id}
        question={this.state.data.question}
        title={category}
        value={this.state.data.value}
        score={this.state.score}
        answer={this.state.formData.answer}
        handleChange={this.handleChange}
        handleAnswer={this.handleAnswer}
        category_id={this.state.data.category_id}
      />
    );
  }
}
export default Jeopardy;


// TODO for Normal Mode
/* 
'//' crosses off the todos below
    //[D] Update the navigation and router of your application to display the new component
    //Display the question, category, and point value returned from the API
    // Create a way to keep track of the user's score
    //Provide a way for the user to submit an answer to the question
    //If the answer is correct then add the point value of the question to the user's score.
    //If the answer is wrong, subtract the point value from the user's score.
    //After the user answers a question display another random question from the API.
*/
//Adding this to the JSX displays all values pulled from API
//  {JSON.stringify(this.state.data.prop)}

// TODO for Medium Mode
/*


    //Create a stateless display component for the Jeopardy game that handles the display of the game

    //Update the Jeopardy component to only render the new display component

    //Pass the needed props from the Jeopardy component to the display component so it has all the data it needs to display the game data and submit the user's answer
    !ALL I needed was anything from this 'parent' component to do was carry its methods and state "props" to be passed to 'child' Display or vice versa
    !Child component has parent's 'props' as "props.LASTproperty" e.g. props.data from this.state.data
    !yellow text or attributes have to match the props name ("props.handleAnswer") inside child component or Display
    // The other should all the display of the data through passed in props.

*/

// TODO for Hard Mode
/*

    Instead of displaying a single random question, display 3 categories.
    Once a user selects a category, display the question for the category selected
    -----The rest of the application should work the same

-- Maybe the roadmap to Hard Mode ||
    !I can create a function that generates 3 random questions THEN
    !hide it behind 3 buttons, user clicks on one then display its data
    !I might need to create an array? to list the 3 generated? and identify
*/
//Alternative if not using <form>
  /*
    handleAnswer = () => {
      let score = this.state.score
      if (this.state.formData.answer === this.state.data.answer) {
          score += this.state.data.value
      } else {
        score +- this.state.data.value
      }
        this.setState(score, userAnswer: '') //If 'userAnswer' were inside this.state
        this.getNewQuestion()
    } //Could merge the alias to this.state.score with older handleAnswer
    */