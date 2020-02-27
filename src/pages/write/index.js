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
    this.state = {
      components: [],
      componentsCounter: 0
    };

    global.document.title = 'Espaço da Tecnologia';

    this.removeComponent = this.removeComponent.bind(this);
    this.handleComponentContentChange = this.handleComponentContentChange.bind(
      this
    );
  }

  addNewComponent(componentType) {
    const { components, componentsCounter } = this.state;

    const component = PostWriter.renderComponent(
      componentsCounter,
      componentType,
      this.removeComponent,
      this.handleComponentContentChange
    );

    components.push({ id: componentsCounter, type: componentType, component });
    this.setState({ components, componentsCounter: componentsCounter + 1 });
  }

  removeComponent(componentId) {
    let { components } = this.state;

    components = components.filter(component => component.id !== componentId);
    this.setState({ components });
  }

  handleComponentContentChange(componentId, content) {
    let { components } = this.state;

    components = components.map(component => {
      const aux = component;
      if (aux.id === componentId) {
        aux.content = content;
      }
      return aux;
    });

    this.setState({ components });
  }

  static renderComponent(
    index,
    componentType,
    deleteFunction,
    contentFunction
  ) {
    return {
      paragraphWriter: (
        <ParagraphWriter
          className='write-form-element'
          deleteFunction={deleteFunction}
          contentFunction={contentFunction}
          key={index}
          componentId={index}
        />
      ),
      codeWriter: (
        <CodeWriter
          className='write-form-element'
          deleteFunction={deleteFunction}
          contentFunction={contentFunction}
          key={index}
          componentId={index}
        />
      ),
      imageCenterPicker: (
        <ImageCenterPicker
          className='write-form-element'
          deleteFunction={deleteFunction}
          contentFunction={contentFunction}
          key={index}
          componentId={index}
        />
      )
    }[componentType];
  }

  savePost() {
    console.log(this.state);

    const { title, author, category, components } = this.state;
  }

  render() {
    const { components } = this.state;

    return (
      <div id='write'>
        <Header />

        <main>
          <section id='write-form'>
            <h1>Criação de novo post</h1>

            <div className='write-form-row'>
              <label className='write-form-label'>Título</label>
              <input
                className='write-form-input'
                id='write-form-id-title'
                type='text'
                onChange={event => {
                  this.setState({ title: event.target.value });
                }}
              />
            </div>

            <div className='write-form-row'>
              <label className='write-form-label'>Autor</label>
              <input
                className='write-form-input'
                id='write-form-id-title'
                type='text'
                onChange={event => {
                  this.setState({ author: event.target.value });
                }}
              />
            </div>

            <div className='write-form-row'>
              <label className='write-form-label'>Categoria</label>
              <input
                className='write-form-input'
                id='write-form-id-title'
                type='text'
                onChange={event => {
                  this.setState({ category: event.target.value });
                }}
              />
            </div>

            {components.map(component => component.component)}

            <div className='write-form-add'>
              <h6 className='write-form-add-title'>Adicionar</h6>
              <button
                className='write-form-add-item'
                onClick={() => this.addNewComponent('paragraphWriter')}
                type='button'
              >
                Parágrafo
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={() => this.addNewComponent('codeWriter')}
                type='button'
              >
                Bloco de código
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={() => this.addNewComponent('imageCenterPicker')}
                type='button'
              >
                Imagem central
              </button>
            </div>

            <button
              type='button'
              className='write-form-final-save-button buttons-center'
              onClick={() => this.savePost()}
            >
              Criar Post
            </button>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default PostWriter;
