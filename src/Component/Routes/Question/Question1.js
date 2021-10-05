import React from 'react'
import styled from 'styled-components'
import Section from './Section'


export default class Question1 extends React.Component {
    state = {
        data: []
    }

    datafuc(e){
            console.log(e)
    }
    
    render(){
        return(
            <Section
            question="Q1"
            ask1="1. 나는 우주와 인간 세상의 연관성에 대해 궁금하다"
            ask2="2. 나는 우주의 탄생 배경이 궁금하다"
            ask3="3. 우주고 뭐고 관심없다"
            page="q2"
            datafuc={this.datafuc}>
            </Section>)}
    
}

