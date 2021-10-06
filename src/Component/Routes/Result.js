import React from 'react'
import styled from 'styled-components'
import {state} from './Home/Homecontainer'
import axios from 'axios'

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

export default class Result extends React.Component{
        state = {
            book: []
        }
    
    
    
   async componentDidMount(){
        /*await axios({
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://nl.go.kr/NL/search/openApi/saseoApi.do',
            headers:{
                'APIKey': 'eb3730ce2882243fb834d7bafc5a12b313b640d85279fe815d81821905ef8e7c'
            }
        }).then((response)=>console.log(response))
          */
         await axios.get('https://cors-anywhere.herokuapp.com/https://nl.go.kr/NL/search/openApi/saseoApi.do?key=eb3730ce2882243fb834d7bafc5a12b313b640d85279fe815d81821905ef8e7c')
         
    }
    render(){
        return (
            <Component>
                <Head>님의 인생 책은...</Head>
            </Component>
        )
}


}
