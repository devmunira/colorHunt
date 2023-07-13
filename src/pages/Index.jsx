import React from 'react'
import Container from '../components/shared/container/Container'
import LogoSection from '../components/shared/logo/LogoSection'
import css from './index.module.css'
import {color} from '../data/data.js'
import ColorList from '../components/ui/colorList/ColorList'

const Index = () => {
  return (
    <div>
        <LogoSection></LogoSection>
        <Container>
            <div className={css.leftSidebar}>
                <ul>
                    {color?.map((item,index) => (<li key={index}><ColorList>{item.name}</ColorList></li>))}
                </ul>
            </div>
            <div className={css.mainArea}></div>
            <div className={css.rightSidebar}></div>
        </Container>
    </div>
  )
}

export default Index