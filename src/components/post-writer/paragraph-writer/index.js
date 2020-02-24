import React, { Component } from 'react';

import './styles.css';

class ParagraphWriter extends Component {
  constructor() {
    super();
    this.state = {
      editionMode: true,
      paragraph: ''
    };

    this.handleParagraphChange = this.handleParagraphChange.bind(this);
    this.saveParagraph = this.saveParagraph.bind(this);
    this.editParagraph = this.editParagraph.bind(this);
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
    const { paragraph, editionMode } = this.state;

    return (
      <div className='paragraph-writer'>
        {editionMode && (
          <textarea
            className='paragraph-writer-textarea'
            onChange={this.handleParagraphChange}
            value={paragraph}
          />
        )}
        {!editionMode && (
          <p className='paragraph-writer-paragraph'>{paragraph}</p>
        )}

        {editionMode && (
          <div className='buttons-row'>
            <button
              className='buttons-save'
              type='button'
              onClick={this.saveParagraph}
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
              onClick={this.editParagraph}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ParagraphWriter;
