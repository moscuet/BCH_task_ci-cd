import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);


  const taskDone = notes.filter(note => note.active === false).length

  const handleChange = (event) => {
    setNote(event.target.value)
  }

  const handleAdd = (event) => {
    if (!note) return
    let newNote = {
      text: note,
      active: true,
      id: notes.length + 1
    }
    setNotes(notes.concat(newNote))
    setNote('')
    console.log(notes)
  }
  const toggleActive = (id) => {
    const modifiedNotes = notes.map(note => {
      if (note.id === id) return { text: note.text, active: !note.active, id: note.id }
      return note
    })
    setNotes(modifiedNotes)
  }

  const handleDel = (id) => {
    const modifiedNotes = []
    notes.forEach(note => {
      if (note.id !== id) modifiedNotes.push({ text: note.text, active: note.active, id: modifiedNotes.length + 1 })
    })
    setNotes([...modifiedNotes])
  }


  let lists = notes.map((note) => (
    <li key={note.id} >
      <p onClick={() => toggleActive(note.id)} className={note.active ? '' : 'inactive-text'} >{note.text}</p>
      <button onClick={() => handleDel(note.id)}>delete</button>
    </li>

  ))
  return (
    <div>
      <div>
        <h1>Add new note</h1>
        <input type="text" value={note} onChange={handleChange}></input> <button onClick={handleAdd} className="namukka" >add</button>
        <p>{note}</p>
      </div>
      <p> {notes.length > 0 && taskDone === notes.length ? 'wow! mission accomplished' : `Total task:${notes.length}, completed task ${taskDone}`}</p>
      <h3> Notes</h3>
      <ol>{lists}</ol>

    </div>
  );
}

export default Notes