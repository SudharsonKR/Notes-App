import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { url } from '../../api/api'
import moment from 'moment'

export default function EditNote() {

  const [note, setNote] = useState({title:'', content: '', date:'', id: ''})
  const navigate = useNavigate()
  const params = useParams()
  
  useEffect(() =>{
    const getNote = async () =>{
        const token = localStorage.getItem('tokenStore')
                
        if(params.id){
            const res = await axios.get(`${url}/api/notes/${params.id}`, {
                headers: {Authorization: token}
            })
            setNote({
              title: res.data.title,
              content: res.data.content,
              date: res.data.date,
              id: res.data._id
          })
          }
    }
    getNote()
},[params.id])

  const onChangeInput = (e) =>{
    const {name, value} = e.target;
    setNote({...note, [name]:value})
  }

  const editNote = async(e)=>{
    e.preventDefault()
    try{
        const token=localStorage.getItem('tokenStore')
        if(token){
          const {title, content, date, id}=note
          const newNote={title, content, date}
          await axios.put(`${url}/api/notes/${id}`, newNote, { headers: {Authorization: token}})
          return navigate('/')
        }
    }catch(err){
      window.location.href='/'
    }
  }

 return (
    <div className='create-note'>
      <h2>Edit Note</h2>
      <form onSubmit={editNote} autoComplete='off'>
      <div className='row'>
        <label htmlFor="title">Title</label>
        <input type="text" value={note.title} id='title' name='title' required onChange={onChangeInput}/>
      </div>

      <div className='row'>
        <label htmlFor="content">Content</label>
        <textarea type="text" value={note.content} id='content' name='content' required rows="10" onChange={onChangeInput}/>
      </div>

      <label htmlFor="date">Date: {moment(note.date).format("DD/MM/YYYY")}</label>
      <div className='row'>
        <input type="datetime-local" id='date' name='date' onChange={onChangeInput}/>
      </div>
      <button type='submit'> Save</button>
      </form>
    </div>
  )
}
