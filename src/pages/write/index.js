/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

import api from '../../services/api';
import BlogConfiguration from '../../config/BlogConfiguration';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ParagraphWriter from '../../components/post-writer/paragraph-writer';
import CodeWriter from '../../components/post-writer/code-writer';
import ImageCenterPicker from '../../components/post-writer/image-center-picker';

class PostWriter extends Component {
  static async saveImageAndGetURL(image) {
    const formData = new FormData();

    formData.append('image', image);

    const result = await api.post('/image', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    return result.data.url;
  }

  static async discoverCategoryIdByCategoryUrl(categoryUrl) {
    try {
      const result = await api.get(`/categories/${categoryUrl}`);

      return result.data._id;
    } catch (error) {
      const result = await api.get('/categories/no-category');

      return result.data._id;
    }
  }

  static renderComponent(
    index,
    componentType,
    deleteFunction,
    contentFunction
  ) {
    return {
      paragraph: (
        <ParagraphWriter
          className='write-form-element'
          deleteFunction={deleteFunction}
          contentFunction={contentFunction}
          key={index}
          componentId={index}
        />
      ),
      code: (
        <CodeWriter
          className='write-form-element'
          deleteFunction={deleteFunction}
          contentFunction={contentFunction}
          key={index}
          componentId={index}
        />
      ),
      imageCenter: (
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

  constructor() {
    super();
    this.state = {
      components: [],
      componentsCounter: 0,
      postCreated: false
    };

    const { pageTitle } = BlogConfiguration.defaults;

    global.document.title = pageTitle;

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

  async savePost() {
    const { title, author, category, components } = this.state;

    const categoryId = await PostWriter.discoverCategoryIdByCategoryUrl(
      category
    );

    console.log(categoryId);

    // eslint-disable-next-line no-restricted-syntax
    for (const component of components) {
      const { type } = component;

      if (type === 'imageCenter') {
        // eslint-disable-next-line no-await-in-loop
        component.content = await PostWriter.saveImageAndGetURL(
          component.content
        );
      }
    }

    const elements = components.map(component => ({
      element: component.type,
      content: component.content
    }));

    const post = {
      title,
      author,
      category: categoryId,
      elements
    };

    const result = (await api.post('/posts', post)).data;
    if (result) {
      this.setState({ postCreated: true });
    }
  }

  render() {
    const { components, postCreated } = this.state;

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
                onClick={() => this.addNewComponent('paragraph')}
                type='button'
              >
                Parágrafo
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={() => this.addNewComponent('code')}
                type='button'
              >
                Bloco de código
              </button>
              <hr />
              <button
                className='write-form-add-item'
                onClick={() => this.addNewComponent('imageCenter')}
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

            {postCreated && (
              <strong className='write-form-post-created'>
                Post criado com sucesso
              </strong>
            )}
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default PostWriter;
