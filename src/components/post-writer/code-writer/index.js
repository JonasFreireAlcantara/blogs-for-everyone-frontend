import React, { Component } from 'react';

import './styles.css';

class CodeWriter extends Component {
  constructor() {
    super();
    this.state = {
      editionMode: true,
      code: ''
    };

    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.saveCode = this.saveCode.bind(this);
    this.editCode = this.editCode.bind(this);
  }

  saveCode() {
    const { code } = this.state;

    if (code.length !== 0) {
      this.setState({ editionMode: false });
    }
  }

  editCode() {
    this.setState({ editionMode: true });
  }

  handleCodeChange(event) {
    this.setState({ code: event.target.value });
  }

  render() {
    const { code, editionMode } = this.state;

    return (
      <div className='code-writer'>
        {editionMode && (
          <textarea
            className='code-writer-textarea'
            onChange={this.handleCodeChange}
            value={code}
          />
        )}
        {!editionMode && <kbd className='code-writer-code'>{code}</kbd>}

        {editionMode && (
          <div className='code-writer-buttons-row'>
            <button
              className='buttons-save'
              type='button'
              onClick={this.saveCode}
            >
              Salvar
            </button>
          </div>
        )}
        {!editionMode && (
          <div className='buttons-row'>
            <button
              className='buttons-edit'
              type='button'
              onClick={this.editCode}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CodeWriter;
