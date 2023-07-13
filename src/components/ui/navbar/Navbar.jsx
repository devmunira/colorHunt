import React from 'react'
import {TbDotsVertical} from 'react-icons/tb'
import ListItem from '../List/ListItem'
import css from '../../shared/logo/logo.module.css'
import useToggle from '../../../hooks/useToggle'

const lists = ['Palettes' , 'Create' , 'Collections' , 'About' , 'Ínstragram' , 'MadeBy Munira']

const Navbar = () => {
   const Show =  useToggle()
  return (
    <div>
        <TbDotsVertical onClick={Show.handleToggle}></TbDotsVertical>
        <div>
            {Show.show && <ul className={css.ListContainer}>
                {
                    lists.map((item,index) => <ListItem key={index} list={item}></ListItem>)
                }
            </ul>}
        </div>
    </div>
  )
}

export default Navbar