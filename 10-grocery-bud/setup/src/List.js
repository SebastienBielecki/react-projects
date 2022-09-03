
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({name, id, onDelete, onModify, key}) => {
  
  return <>
    <article className='grocery-item'>
      <p className='title'>{name}</p>
      <div className='btn-container'>
        <button type="button" className='edit-btn' onClick={() => onModify(id, key)}><FaEdit /></button>
        <button type="button" className='delete-btn' onClick={() => onDelete(id)}><FaTrash /></button>
      </div>
    </article>
  </>
  
  
  
}

export default List
