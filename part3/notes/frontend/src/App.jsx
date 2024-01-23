/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Note from "./components/Note"
import { useState, useEffect } from "react"
import noteService from "./services/notes"
import Notification from "./components/Error"
import Footer from "./components/Footer"
import './index.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])
  
  const addNote = (e) => {
    e.preventDefault()
  
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
  
    noteService
    .create(noteObject)
    .then(initialNotes => {
      setNotes(notes.concat(initialNotes))
      setNewNote('')
    })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    
    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote))
    })
    .catch(error => {
      setErrorMessage(
        `Note: '${note.content}' was already deleted from the server!`
        )
        setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
      {/* using index as key not recommended as will create problems */}
        {notesToShow.map(note => 
          <Note
          key={note.id} 
          note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          placeholder="Add Note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <button style={{marginTop: '20px'}} onClick={() => setShowAll(!showAll)}>
        Toggle {showAll ? 'important' : 'all'}
      </button>
      <Footer />
    </div>
  )
} 


export default App