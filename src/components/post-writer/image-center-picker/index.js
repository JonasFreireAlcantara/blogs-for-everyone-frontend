/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import './styles.css';

class ImageCenterPicker extends Component {
  constructor(props) {
    super(props);
    const { componentId } = props;
    this.state = {
      image: null,
      componentId
    };
  }

  handleImageChange(event) {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  }

  render() {
    const { image, componentId } = this.state;
    const { className, deleteFunction } = this.props;

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

        <div className='buttons-row'>
          {deleteFunction && (
            <button
              className='buttons-save'
              type='button'
              onClick={() => deleteFunction(componentId)}
            >
              Excluir
            </button>
          )}
        </div>
      </div>
    );
  }
}

ImageCenterPicker.propTypes = {
  className: PropTypes.string,
  deleteFunction: PropTypes.func,
  componentId: PropTypes.number.isRequired
};

ImageCenterPicker.defaultProps = {
  className: '',
  deleteFunction: undefined
};

export default ImageCenterPicker;
