import React from 'react'
import { TbFloatNone } from 'react-icons/tb'

const listStyle = {
    listStyleType : 'none',
    fontSize : '12px',
    fontFamilly : "Verdana, Geneva, Tahoma, sans-serif"
    
}

const ListItem = ({list,hanldeClick}) => {
  return (
    <li style={listStyle}>
        <a href="#/" onClick={hanldeClick} style={{ color : '#444' }}>{list}</a>
    </li>
  )
}

export default ListItem