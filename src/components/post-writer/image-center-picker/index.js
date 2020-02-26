/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import './styles.css';

class ImageCenterPicker extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    };
  }

  handleImageChange(event) {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  }

  render() {
    const { image } = this.state;
    const { className } = this.props;

    return (
      <div className={`image-center-picker ${className}`}>
        <label className='buttons-save image-center-picker-buttons-select'>
          Selecionar Imagem
          <input
            type='file'
            accept='image/*'
            onChange={event => this.handleImageChange(event)}
          />
        </label>

        {image && (
          <img
            className='image-center-picker-preview'
            src={image}
            alt='Preview'
          />
        )}
      </div>
    );
  }
}

ImageCenterPicker.propTypes = {
  className: PropTypes.string
};

ImageCenterPicker.defaultProps = {
  className: ''
};

export default ImageCenterPicker;
