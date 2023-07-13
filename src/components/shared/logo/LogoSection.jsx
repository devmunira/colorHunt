import React from 'react'
import Container from '../container/Container'
import { settings } from '../../../data/data'
import Logo from '../../ui/logo/logo'
import css from './logo.module.css'
import BaseButton from '../../ui/button/Button'
import TextInput from '../../ui/inputs/TextInput'
import Navbar from '../../ui/navbar/Navbar'
import useToggle from '../../../hooks/useToggle'
import {AiOutlineSearch} from 'react-icons/ai'

const LogoSection = () => {
    const showSearch = useToggle();
    const hanldeSearchKeyUp = () => {
        showSearch.setShow(!showSearch.show)       
    }
  return (
    <Container className={css.headerContainer}>
        <div className={css.logoArea}>
            <img src={settings.logo} style={{ width:'50px' }}></img>
            <Logo>Color Hunt</Logo>
        </div>
        <div style={{ width : '60%', position: 'relative' }}>
            <TextInput placeholder='Search Platerres' onFocus={hanldeSearchKeyUp}>
            </TextInput>
            {showSearch.show && <AiOutlineSearch className={css.searchIcon}></AiOutlineSearch>}
        </div>
        <div>
            <BaseButton><img src="https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk" style={{ width:'30px' , paddingRight : '10px' }}></img> Add to Chrome</BaseButton>
        </div>
        <div>
            <Navbar></Navbar>
        </div>
    </Container>
  )
}

export default LogoSection