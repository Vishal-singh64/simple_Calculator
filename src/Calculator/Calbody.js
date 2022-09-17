import React,{useState} from 'react'
import CalBtn from './CalBtn'
import CalScreen from './CalScreen'
import { Container,CalContainer,ButtonArea } from './CalStyle'


export default function Calbody() {

    const [ScreenValues, setScreenValues] = useState('')

    const handleC=(e)=>{
        console.log(e)
        setScreenValues(ScreenValues.concat(e))   
    }

    const clear=()=>{
        
        setScreenValues('')
        
    }

    const backspace=()=>{
        
        setScreenValues(ScreenValues.slice(0,-1))
        
    }

    const calculate=()=>{
        
        setScreenValues(eval(ScreenValues).toString());
        
    }
  return (
    <Container>
        <CalContainer>
            <CalScreen screenvalue={ScreenValues}/>
               <ButtonArea>
                        
                        <CalBtn namerow1='C' call={()=>{clear()}} height="8vh"/>
                        <CalBtn namerow1="<=" call={()=>{backspace()} } height="8vh"/>
                        <CalBtn namerow1='-' call={()=>{handleC("-")}} height="8vh"/>
                        <CalBtn namerow1='*' call={()=>{handleC("x")}} height="8vh"/>
                </ButtonArea>
                <ButtonArea>
                        {/* row 2 data */}
                        <CalBtn namerow1='1' call={()=>{handleC("1")}} height="8vh"/>
                        <CalBtn namerow1='2' call={()=>{handleC("2")}} height="8vh"/>
                        <CalBtn namerow1='3' call={()=>{handleC("3")}} height="8vh"/>
                        <CalBtn namerow1='-' call={()=>{handleC("*")}} height="8vh"/>
                </ButtonArea>

                <ButtonArea>
                        {/* row 3 data */}
                        <CalBtn namerow1='4' call={()=>{handleC("4")}} height="8vh" />
                        <CalBtn namerow1="5" call={()=>{handleC("5")}} height="8vh"/>
                        <CalBtn namerow1='6' call={()=>{handleC("6")}} height="8vh"/>
                        <CalBtn namerow1='+' call={()=>{handleC("-")}} height="8vh"/>
                </ButtonArea>
                <ButtonArea>

                        {/* row 4 data */}
                        <CalBtn namerow1='7' call={()=>{handleC("7")}} height="8vh"/>
                        <CalBtn namerow1='8' call={()=>{handleC("8")}} height="8vh"/>
                        <CalBtn namerow1='9' call={()=>{handleC("9")}} height="8vh"/>
                        <CalBtn namerow1='=' call={()=>{calculate()}} height="8vh"/>
                </ButtonArea>
                <ButtonArea>

                        {/* row 4 data */}
                        <CalBtn namerow1='0' call={()=>{handleC("0")}} height="8vh"/>
                        <CalBtn namerow1='.' call={()=>{handleC(".")}} height="8vh"/>
                        <CalBtn namerow1='00' call={()=>{handleC("00")}} height="8vh"/>
                        {/* <CalBtn namerow2='=' Longcall={()=>{calculate()}} height="16vh"/>  */}
                </ButtonArea>
                

        </CalContainer>
    </Container>
    
  )
}
