import React from 'react'
import api from '../../Component/api'
import styled from 'styled-components'
import {state} from './Home/Homecontainer'

const Component = styled.div`
width: 600px;
height: 90vh;
border: solid 14px #c86b85;
background: #f5eee6;
display: flex;
flex-direction: column;
align-items: center;  `

const Head = styled.div`
font-size: 20px;
margin-top: 20px;`

const Result = ({state}) => {
    return (
        <Component>
            <Head>{state}님의 인생 책은...</Head>
        </Component>
    )
}

export default Result