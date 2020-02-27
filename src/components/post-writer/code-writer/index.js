import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class CodeWriter extends Component {
  constructor(props) {
    super(props);
    const { componentId } = props;
    this.state = {
      editionMode: true,
      code: '',
      componentId
    };
  }

  saveCode(contentFunction) {
    const { code, componentId } = this.state;

    if (code.length !== 0) {
      this.setState({ editionMode: false });
      contentFunction(componentId, code);
    }
  }

  editCode() {
    this.setState({ editionMode: true });
  }

  handleCodeChange(event) {
    this.setState({ code: event.target.value });
  }

  render() {
    const { code, editionMode, componentId } = this.state;
    const { className, deleteFunction, contentFunction } = this.props;

    return (
      <div className={`code-writer ${className}`}>
        {editionMode && (
          <textarea
            className='code-writer-textarea'
            onChange={event => this.handleCodeChange(event)}
            value={code}
          />
        )}
        {!editionMode && <kbd className='code-writer-code'>{code}</kbd>}

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
              onClick={() => this.saveCode(contentFunction)}
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
              onClick={() => this.editCode()}
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
  className: PropTypes.string,
  componentId: PropTypes.number.isRequired,
  deleteFunction: PropTypes.func,
  contentFunction: PropTypes.func
};

CodeWriter.defaultProps = {
  className: '',
  deleteFunction: undefined,
  contentFunction: undefined
};

export default CodeWriter;
