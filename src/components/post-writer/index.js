/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import PropTypes from 'prop-types';

class Writer extends Component {
  constructor(props) {
    super(props);
    const { componentId, deleteFunction, contentFunction } = props;
    this.state = {
      editionMode: true,
      content: undefined,
      componentId,
      deleteFunction,
      contentFunction
    };
  }

  saveContent(contentFunction) {
    const { content, componentId } = this.state;

    if (content) {
      this.setState({ editionMode: false });
      contentFunction(componentId, content);
    }
  }

  editContent() {
    this.setState({ editionMode: true });
  }
}

Writer.propTypes = {
  deleteFunction: PropTypes.func,
  contentFunction: PropTypes.func.isRequired,
  componentId: PropTypes.number.isRequired
};

Writer.defaultProps = {
  deleteFunction: undefined
};

export default Writer;
