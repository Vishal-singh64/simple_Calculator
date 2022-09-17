import React from 'react'
import { ScreenContainer, Screendata } from './style/ScreenStyle'

export default function CalScreen(props) {
  return (
    <ScreenContainer>
        <Screendata>
            {props.screenvalue}
        </Screendata>
    </ScreenContainer>
  )
}
