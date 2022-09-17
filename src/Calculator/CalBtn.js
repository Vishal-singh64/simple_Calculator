import React from 'react'
import {Button} from './style/BtnStyle'

export default function CalBtn(props) {


  return (
    <div>
      <Button onClick={props.call} btnHeight={props.height} >{props.namerow1}</Button>     
    </div>
  )
}
