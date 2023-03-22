import React from 'react';
import CopyCat from '../components/CopyCat';
import copycatPic from '../components/copycat.png';
import quietcatPic from '../components/quietcat.png';

const images = {
  copycat: copycatPic,
  quietcat: quietcatPic
};


export default class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }
  
  render() {
    return (<CopyCat 
      copying={this.state.copying}
      toggleTape={this.toggleTape}
      images={images}
      input={this.state.input}
      onChange={this.handleChange}
      name='Landa'
    />)
  };
}