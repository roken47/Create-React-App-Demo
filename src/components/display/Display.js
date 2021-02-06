import React from "react";
import RickRoll from "../../assets/images/rickroll.jpg";

function Display(props) {

  console.log(props.data);
  if (!props.id) {
    return (
      <div>
        <img src={RickRoll} height="200px" />
      </div>
    );
  } else {
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
          
            {/* form requires event.preventDefault() */}
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