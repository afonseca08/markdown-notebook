import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  getListItems(notes, currentNote, clickhandler) {
    let items = [];

    for (const [i, note] of notes.entries()) {
      // add <li>'s to array with key as array index from notes
      if (i === currentNote) {
        items.push(<li className='selected' key={i} data-id={i} 
          onClick={ clickhandler }>{note.name}</li>);
      } else {
        items.push(<li key={i} data-id={i} onClick={ clickhandler }>{note.name}</li>);
      }
    }
    return items;
  }

  render() {
    return (
      <div className="sidebar column column-25">
        <button className = "button button-clear"
          onClick = { this.props.addNote }>+ new note</button>
        <ul>
          { this.getListItems(this.props.notes,
            this.props.currentNote,
            this.props.clickhandler) }
        </ul>
      </div>
    );
  }
}

export default Sidebar;
