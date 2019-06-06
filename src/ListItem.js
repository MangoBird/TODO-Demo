import React from 'react'

export const ListItem = (props) => {
  const { content, id, onDelete } = props

  return (
    <div>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>삭제하기</button>
    </div>
  )
}