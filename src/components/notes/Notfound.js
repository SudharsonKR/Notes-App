import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='not_found'>
    <h2>Looking for somthing?</h2>
    <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
    <p>
    Go To Online Shopping <Link to ='/'>Home</Link> Page</p>
</div>
  )
}
