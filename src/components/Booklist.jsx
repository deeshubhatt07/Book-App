import React, { useState } from 'react'
import Book from './Book';
import './Book.css'


const Booklist = () => {
    const [book, setBook] = useState([{ bookname: "Atomic Habits", author: "Baba sahed" },
    { bookname: "Castlevilla Ghost", author: "Dr Atom" },
    { bookname: "7 Effective habits", author: "Govind saab" }]);

    const setNewBook = () => {
        setBook([{ bookname: "New Atomic Habits", author: "Baba sahed Jr" },
        { bookname: "New Castlevilla Ghost", author: "Dr Atom Jr" },
        { bookname: "New 7 Effective habits", author: "Govind saab Jr" }]);
    }

    const deleteItemfunc = index => {
        const updatedBooks = [...book]; 
        updatedBooks.splice(index, 1); 
        setBook(updatedBooks); 
    }

    const changedBook = (event,index) => {
        const newBooks = [...book];
        newBooks[index].bookname = event.target.value;
        setBook(newBooks);
    }

    const bookSet = book.map((bookItem, index) => {
        return (
            <Book
                bookname={bookItem.bookname}
                author={bookItem.author}
                deleteItem={() => deleteItemfunc(index)}
                index={index}
                key={index}
                chamgedBook={(e) => changedBook(e,index)} />
        )
    })

    return (
        <div className='bookList'>
            <button onClick={setNewBook}>Set New Books</button>
            {(bookSet.length>0)?bookSet:(<h2>No Books Available</h2>)}
        </div>
    )
}

export default Booklist
