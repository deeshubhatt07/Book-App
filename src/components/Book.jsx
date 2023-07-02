import React from 'react'
import './Book.css'

const Book = (props) => {
  return (
    <div className='book'>
      <div className="newBook"><input type="text" placeholder='type your bookname here' onChange={props.chamgedBook}></input></div>
      <h1>Book : {props.bookname} </h1>
      <h2>Author : {props.author} </h2>
      <div className="delete"><button onClick={props.deleteItem} style={{"backgroundColor": "red"}}>Delete</button></div>
    </div>
  )
}

export default Book;
