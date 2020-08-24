import React from 'react'
import TodoItem from './TodoItem'

export default () => {
 const items = ['learn react', 'learn react-native', 'learn english']
  return (
    <ul>
      {items.map(
        (text, index) => <TodoItem text={text} key={index}/>
      )}
    </ul>
  )
}