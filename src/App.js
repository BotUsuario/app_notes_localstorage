import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './components/NoteList'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'Welcome to my Notes App',
    date: new Date().toDateString(),
},
])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search 
          setSearchText={setSearchText}
        />
        <NoteList 
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} 
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  )
}

export default App
