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
  }

  async componentDidMount() {
    console.log('componentDidMount');
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

            <ParagraphWriter />
            <CodeWriter />
            <ImageCenterPicker />
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default PostWriter;
