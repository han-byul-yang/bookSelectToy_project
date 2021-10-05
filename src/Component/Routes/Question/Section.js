import React from 'react'
import styled from 'styled-components'
import '../../../fonts/font.css'
import {Link} from 'react-router-dom'

const Container = styled.div`
font-family: 'ONE-Mobile-POP';
display: flex;
flex-direction: column;
align-content: center;
height: 500px;
width: 650px;
background:  #f5eee6;
border: solid 14px #c86b85;
text-align: center;` 

const Question = styled.div`
text-align: center;
font-size: 40px;
font-weight: 600;
margin: 90px 0 70px 0;`

const Ask1 = styled.button`
font-size: 30px;
font-weight: 200;
margin-bottom: 20px;
font-family: 'CookieRun-Regular';
width: 500px;
`

const Ask2 = styled.div`
font-size: 30px;
font-weight: 200;`

const Section = ({question, ask1, ask2, ask3, page, datafuc}) => {
    return(
        <Container>
            <Question>{question}</Question>
            <Link to={`/${page}`}><Ask1 onClick={datafuc}>{ask1}</Ask1></Link>
            <Link to={`/${page}`}><Ask1 onClick={datafuc}>{ask2}</Ask1></Link>
            <Link to={`/${page}`}><Ask1 onClick={datafuc}>{ask3}</Ask1></Link>
        </Container>)
}



export default Section