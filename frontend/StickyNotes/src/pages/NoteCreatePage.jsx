import { useState} from 'react'
import { Link,useNavigate } from "react-router-dom"

const NoteCreatePage = () => {
  const navigate = useNavigate();

    const [note,setNote]=useState([])

    const handleBodychange = (value)=>{
      setNote(note => ({...note,'body':value}))
    }

    const handleTitlechange = (value)=>{
        setNote(note => ({...note,'title':value}))
    }

    const createNote=async()=>{
      fetch(`http://127.0.0.1:8000/api/note-create/`,{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(note)
      })
      navigate('/')
    }


  return (
    <div className="note-page">
      <div className="stickynote">
        <div className="stickynote-header">
            <input onChange={(e) => (handleBodychange(e.target.value))} className="stickynote-title" maxLength="50" defaultValue={note.title} placeholder='Type title here ...'></input>
            <div className="stickynote-date">
                A new Stickynote
            </div>
        </div>
        <textarea onChange={(e) => (handleTitlechange(e.target.value))} className="stickynote-body" placeholder='Enter the body here ...'>
        </textarea>
        <div className="stickynote-footer">
            <button onClick={createNote} className="button stickynote-done">Done</button>
            <button className="button stickynote-cancel"><Link to='/'>Cancel</Link></button>
        </div>
      </div>
    </div>
  )
}

export default NoteCreatePage