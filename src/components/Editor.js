import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  render() {
    return (
      <div className="editor column column-75">
        <input value= { this.props.name } onChange = { this.props.nameChange }/>
        <SimpleMDE 
          onChange = { this.props.change }
          value = { this.props.note }
          options = {{
            autofocus: true
          }}
        />
      </div>
    );
  }
}

export default Editor;
