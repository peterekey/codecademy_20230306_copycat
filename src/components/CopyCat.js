import React from 'react';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export default class CopyCat extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return (
      <div>
        <h1>Copy Cat</h1>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
      </div>
    );
  };
}