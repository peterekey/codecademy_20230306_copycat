import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';

export default class CopyCat extends React.Component {  
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const images = this.props.images;
    const name = this.props.name;
    const h1Style = {
      marginBottom: 80
    }

    return (
      <div styles={styles.divStyles}>
        <h1 style={h1Style}>Copy Cat {name ? name : 'Tom'}</h1>
        <input 
          type={'text'}
          value={this.props.input}
          onChange={this.props.onChange}
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying && this.props.input }</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.bool.isRequired,
  images: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
}