import React, { Component } from 'react';
import LoadingGif from '../../assets/images/load_spinner.gif';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onload: true,
        }
    }
    handleLoad() {
        this.setState({
            onload: false,
        })
    }
    
    render() {
        if(this.state.onload === true) {
            
            return (
                <div>
                    <img src={LoadingGif} alt="Loading GIF"/>
                    {setTimeout(this.handleLoad(), 3000)}
                </div>
            )
        }
        
    }
}

export default Loading

/*
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
*/