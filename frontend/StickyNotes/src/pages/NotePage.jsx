import { useState, useEffect } from 'react'
import { Link, useParams,useNavigate } from "react-router-dom"

const NotePage=()=> {

    const navigate = useNavigate();

    const {noteId}=useParams();

    const [note,setNote]=useState([])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString()
    }
    
    useEffect(() => {
    getNote()
    }, [])

    const deleteNote=()=>{
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        navigate('/')
    }

    const updateNote=async()=>{
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
        navigate('/')
    }

    const handleBodychange = (value)=>{
        setNote(note => ({...note,'body':value}))
    }

    const handleTitlechange = (value)=>{
        setNote(note => ({...note,'title':value}))
    }


    const getNote=async()=>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

  return (
    <div className="note-page">
    <div className="stickynote">
      <div className="stickynote-header">
          <input onChange={(e)=>(handleTitlechange(e.target.value))} className="stickynote-title" maxLength="50" value={note.title}></input>
          <div className="stickynote-date">
            <span>Last modified: </span>
            <span>{formatDate(note.update_date)}</span>
            <span> | </span>
            <span>Created: </span>
            <span>{formatDate(note.created_date)}</span>
          </div>
      </div>
      <textarea onChange={(e)=>(handleBodychange(e.target.value))} className="stickynote-body"
          value={note.body}
      >
      </textarea>
      <div className="stickynote-footer">
          <button onClick={deleteNote} className="button stickynote-delete">Delete</button>
          <button onClick={updateNote} className="button stickynote-done">Done</button>
          <button className="button stickynote-cancel"><Link to='/'>Cancel</Link></button>
      </div>
    </div>
  </div>
  )
}

export default NotePage