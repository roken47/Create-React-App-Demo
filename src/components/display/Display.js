import React from "react";
import RickRoll from "../../assets/images/rickroll.jpg";
import Loading from "../loading/Loading";

function Display(props) {

  console.log(props.data);
  if (!props.id) {
    return (
      <div>
        <img src={RickRoll} height="200px" />
      </div>
    );
  } else {
    //TODO Notes for Hard Mode
    //map() method to help with generating 3 questions and or its data?
    //going to want the index of each data[i] or data[0] why Zero?
    // -- Question -- Any way to console.log once for data set pulled from API? Every character renders it again in console.
    return (
      <div className="randomQuestion">
        <div id="randomQuestion">
          <em>Question:</em> <strong>{props.question}</strong>
        </div>
        <div id="randomCategory" key={props.category_id}>
          <em>Category: </em>
          <strong>{props.category}</strong>
        </div>

        <div className="randomPoints">
          <em>Points: </em>
          <strong>{props.value}</strong>
          <br />
          <em>Score: </em>
          <strong>{props.score}</strong>
        </div>
        <div>
            <label>
              <strong>Guess! </strong>
            </label>
            <input
              onChange={props.handleChange}
              name="answer"
              type="text"
              value={props.answer}
            />
            <button onClick={props.handleAnswer}>Submit Answer</button>
          
        </div>
      </div>
    );
  }
}

export default Display;

// Maybe for Hard Mode
/*
 <button await={props.getNewQuestion}id={props.title}>{props.title}</button>
          <button id={props.title}>{props.title}</button>
          <button id={props.title}>{props.title}</button>
*/
