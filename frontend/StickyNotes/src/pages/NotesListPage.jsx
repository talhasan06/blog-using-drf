import { useState, useEffect } from 'react'


import NoteItemList from '../components/NoteItemList'
import NoteCreatePlaceHolder from '../components/NoteCreatePlaceHolder'

const NotesListPage = () => {

  let [ notes, setNotes ] = useState([])


  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    setNotes(data)
    console.log(data);
  }

  return (
    <div className="listofnotes">
      <NoteCreatePlaceHolder></NoteCreatePlaceHolder>
      {notes.map((note, index) => (
        <NoteItemList key={index} note={note} />
    ))}
      
  </div>
  )
}

export default NotesListPage