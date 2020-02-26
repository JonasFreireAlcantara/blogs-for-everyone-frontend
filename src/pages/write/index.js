/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

// import api from '../../services/api';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ParagraphWriter from '../../components/post-writer/paragraph-writer';
import CodeWriter from '../../components/post-writer/code-writer';
import ImageCenterPicker from '../../components/post-writer/image-center-picker';

class PostWriter extends Component {
  constructor() {
    super();
    this.state = {};

    global.document.title = 'Espaço da Tecnologia';

    // this.addParagraphWriter = this.addParagraphWriter.bind(this);
    // this.addCodeWriter = this.addCodeWriter.bind(this);
    // this.addImageCenterPicker = this.addImageCenterPicker.bind(this);
  }

  async componentDidMount() {
    console.log('componentDidMount');
  }

  addParagraphWriter() {
    console.log('addParagraphWriter');
  }

  addCodeWriter() {
    console.log('addCodeWriter');
  }

  addImageCenterPicker() {
    console.log('addImageCenterPicker');
  }

  render() {
    return (
      <div id='write'>
        <Header />

        <main>
          <section id='write-form'>
            <h1>Criação de novo post</h1>

            <div className='write-form-row'>
              <label className='write-form-label'>Título</label>
              <input className='write-form-input' type='text' />
            </div>

            <div className='write-form-row'>
              <label className='write-form-label'>Autor</label>
              <input className='write-form-input' type='text' />
            </div>

            <ParagraphWriter className='write-form-element' />
            <CodeWriter className='write-form-element' />
            <ImageCenterPicker className='write-form-element' />

            <div className='write-form-add'>
              <h6 className='write-form-add-title'>Adicionar</h6>
              <button
                className='write-form-add-item'
                onClick={this.addParagraphWriter}
                type='button'
              >
                Parágrafo
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={this.addCodeWriter}
                type='button'
              >
                Bloco de código
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={this.addImageCenterPicker}
                type='button'
              >
                Imagem central
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default PostWriter;
