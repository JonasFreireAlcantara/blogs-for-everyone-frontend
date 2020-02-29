import React from 'react';
import PropTypes from 'prop-types';

import Writer from '..';

import './styles.css';

class CodeWriter extends Writer {
  handleCodeChange(event) {
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
      <div className={`code-writer ${className}`}>
        {editionMode && (
          <textarea
            className='code-writer-textarea'
            onChange={event => this.handleCodeChange(event)}
            value={content}
          />
        )}
        {!editionMode && <kbd className='code-writer-code'>{content}</kbd>}

        {editionMode && (
          <div className='code-writer-buttons-row'>
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

CodeWriter.propTypes = {
  className: PropTypes.string
};

CodeWriter.defaultProps = {
  className: ''
};

export default CodeWriter;
