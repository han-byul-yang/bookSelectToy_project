import React from 'react'
import styled from 'styled-components'
import Section from './Section'


export default class Question2 extends React.Component {
    state = {
        data: []
    }

    datafuc(e){
            console.log(e)
    }
    

    render(){
        return(
            <Section
            question="Q2"
            ask1="1. 나는 먹기 위해 산다"
            ask2="2. 나는 살기 위해 먹는다"
            ask3="3. 나는 먹지 않는다"
            page="q3"
            datafuc={this.datafuc}>
            </Section>)}
}

