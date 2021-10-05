import React from 'react'
import styled from 'styled-components'
import Section from './Section'


export default class Question3 extends React.Component {
    state = {
        data: ''
    }

    datafuc = async (e) => {
        const {target:{innerText}} = e
        console.log(innerText)
        if (innerText.indexOf('1') !== -1){
        await this.setState({data: 'A'})
        } else if (innerText.indexOf('2') !== -1){
        await  this.setState({data:'B'})
         } else {
         await  this.setState({data: 'C'})
         }   
    
}
    render(){
        console.log(this.state.data)
        return(
            <Section
            question="Q3"
            ask1="1. 할 일은 놀고 해도 충분하다"
            ask2="2. 일이 우선이다"
            ask3="3. 아무 것도 하지 않는다"
            page="result"
            datafuc={this.datafuc}>
            </Section>
    )}
}

