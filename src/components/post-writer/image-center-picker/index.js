/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import Writer from '..';

import '../../styles/styles.css';
import './styles.css';

class ImageCenterPicker extends Writer {
  handleImageChange(event, contentFunction) {
    this.setState({ content: URL.createObjectURL(event.target.files[0]) });

    const { componentId } = this.state;
    contentFunction(componentId, event.target.files[0]);
  }

  render() {
    const {
      content,
      componentId,
      deleteFunction,
      contentFunction
    } = this.state;
    const { className } = this.props;

    return (
      <div className={`image-center-picker ${className}`}>
        <label className='buttons-save image-center-picker-buttons-select'>
          Selecionar Imagem
          <input
            type='file'
            accept='image/*'
            onChange={event => this.handleImageChange(event, contentFunction)}
          />
        </label>

        {content && (
          <img
            className='image-center-picker-preview'
            src={content}
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
  className: PropTypes.string
};

ImageCenterPicker.defaultProps = {
  className: ''
};

export default ImageCenterPicker;
