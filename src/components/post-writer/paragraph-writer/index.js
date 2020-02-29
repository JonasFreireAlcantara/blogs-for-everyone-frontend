import React from 'react';
import PropTypes from 'prop-types';

import Writer from '..';

import './styles.css';

class ParagraphWriter extends Writer {
  handleParagraphChange(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    const {
      content,
      editionMode,
      componentId,
      deleteFunction,
      contentFunction
    } = this.state;
    const { className } = this.props;

    return (
      <div className={`paragraph-writer ${className}`}>
        {editionMode && (
          <textarea
            className='paragraph-writer-textarea'
            onChange={event => this.handleParagraphChange(event)}
            value={content}
          />
        )}
        {!editionMode && (
          <p className='paragraph-writer-paragraph'>{content}</p>
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
              onClick={() => this.saveContent(contentFunction)}
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
              onClick={() => this.editContent()}
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
  className: PropTypes.string
};

ParagraphWriter.defaultProps = {
  className: ''
};

export default ParagraphWriter;
