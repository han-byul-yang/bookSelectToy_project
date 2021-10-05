import React from 'react'
import Home from './Homepresenter'
import Result from '../Result'

export default class HomeContainer extends React.Component{
    state = {
        namevalue: '',
        error: false,
        submit: false
    }
    
    namefuc = (e) => {
        e.preventDefault()
    }
    
    submitfuc = () => {
            this.setState({error: true})
    }

    submit =  () => {
        this.setState({submit: true})
    }

    namechange = async (e) => {
        const {target:{value}} = e
        await this.setState({namevalue: value})
        const {namevalue} = this.state
        console.log(e)
        if (!namevalue){
            this.setState({error: true})
        } else {
            this.setState({error: false})
            console.log(namevalue)
        }
    }

    render () {
        const {namevalue, error, submit} = this.state
        console.log(submit)
        return(
        <Home
        namechange={this.namechange}
        submitfuc={this.submitfuc}
        namefuc={this.namefuc}
        namevalue={namevalue}
        error={error}
        submit={submit}/>
    )}
        
}