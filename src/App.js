import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  localStorage = window.localStorage;

  constructor() {
    super();
    this.change = this.change.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.state = { 
      notes: [ {name: 'Untitled', text: 'hello'}],
      currentNote: 0
    };

    // try retrieve state from local storage
    const savedState = this.localStorage.getItem('state');
    if (savedState) {
      this.state = JSON.parse(savedState);
    }
  }

  componentDidUpdate(prevProps) {
    // save state to local storage whenever component is updated
    this.localStorage.setItem('state', JSON.stringify(this.state));
  }

  nameChange (e) {
    let notes = this.state.notes;
    notes[this.state.currentNote].name = e.target.value;    

    this.setState({notes: notes});    
  }

  change(value) {
    let notes = this.state.notes;
    notes[this.state.currentNote].text = value;    

    this.setState({notes: notes});
    //console.log(this.state.notes[this.state.currentNote].text);
  }

  addNote() {
    let note = {name: 'Untitled', text: null};

    this.setState((prevState) => ({
      notes: this.state.notes.concat(note),
      currentNote: prevState.notes.length
    }));
  }

  selectNote(e) {
    //console.log(`select note ${e.currentTarget.dataset.id}`);
    this.setState({
      currentNote: parseInt(e.currentTarget.dataset.id, 10)
    });
  }

  render() {
    console.log('current note: ' + this.state.currentNote);
    console.dir(this.state.notes);

    return (
      <div className="App container">
        <h1>Markdown Notebook</h1>
        <div className="row">
          <Sidebar addNote = { this.addNote } 
            notes = { this.state.notes }
            currentNote = { this.state.currentNote }
            clickhandler = { this.selectNote } />
          <Editor change = { this.change }
            nameChange = { this.nameChange }
            note = { this.state.notes[this.state.currentNote].text }
            name = { this.state.notes[this.state.currentNote].name }
          />
        </div>
      </div>
    );
  }
}

export default App;
