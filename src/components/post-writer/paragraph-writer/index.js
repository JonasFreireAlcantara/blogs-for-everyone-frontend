import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ParagraphWriter extends Component {
  constructor(props) {
    super(props);
    const { componentId } = props;
    this.state = {
      editionMode: true,
      paragraph: '',
      componentId
    };
  }

  saveParagraph() {
    const { paragraph } = this.state;

    if (paragraph.length !== 0) {
      this.setState({ editionMode: false });
    }
  }

  editParagraph() {
    this.setState({ editionMode: true });
  }

  handleParagraphChange(event) {
    this.setState({ paragraph: event.target.value });
  }

  render() {
    const { paragraph, editionMode, componentId } = this.state;
    const { className, deleteFunction } = this.props;

    return (
      <div className={`paragraph-writer ${className}`}>
        {editionMode && (
          <textarea
            className='paragraph-writer-textarea'
            onChange={event => this.handleParagraphChange(event)}
            value={paragraph}
          />
        )}
        {!editionMode && (
          <p className='paragraph-writer-paragraph'>{paragraph}</p>
        )}

        {editionMode && (
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
            <button
              className='buttons-save'
              type='button'
              onClick={() => this.saveParagraph()}
            >
              Salvar
            </button>
          </div>
        )}
        {!editionMode && (
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
            <button
              className='buttons-edit'
              type='button'
              onClick={() => this.editParagraph()}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    );
  }
}

ParagraphWriter.propTypes = {
  className: PropTypes.string,
  deleteFunction: PropTypes.func,
  componentId: PropTypes.number.isRequired
};

ParagraphWriter.defaultProps = {
  className: '',
  deleteFunction: undefined
};

export default ParagraphWriter;
