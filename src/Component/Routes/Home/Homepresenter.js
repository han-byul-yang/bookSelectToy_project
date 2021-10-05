import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
height: 500px;
width: 650px;
background: #f5eee6; 
border: solid 14px #c86b85;
text-align: center;`

const Title = styled.div`
text-align: center;
font-size: 30px;
font-weight: 600;
margin-top: 90px;
`
const Form = styled.form`
text-align: center;
margin-top: 70px;`

const Name = styled.input`
text-align:center;
width: 200px;
height: 50px;`

const Greet = styled.div``

const Error = styled.div`
margin-top: 10px;
color: red;`

const Submit = styled.button`
margin-top: 60px;
width: 210px;
height: 70px;
color: white;
font-size: 40px;
background:  #e6a4b4; 
border-radius: 10px;
font-family: 'Gemunu Libre', sans-serif;`

function Homepresenter({namefuc, namechange, submitfuc, namevalue, error, submit}) {
    return (
        <Container>
            <Title>심리로 알아보는 인생 책</Title>
            <Form onSubmit={namefuc}>
            {/* {submit ? <Greet>{namevalue}님 안녕하세요</Greet> : <Name type="text" placeholder="이름을 입력해주세요" onChange={namechange}/>} */}
            <Name type="text" placeholder="이름을 입력해주세요" onChange={namechange}/>
            </Form>
            <Error>{error ? '이름을 입력해주세요': ''}</Error>
            {/* {error ? <Submit>SUBMIT</Submit> : (namevalue ? <Link to="/"><Submit onClick={submit}>SUBMIT</Submit></Link> : <Submit onClick={submitfuc}>SUBMIT</Submit>) */}
            { error ? <Link to='/'><Submit >SUBMIT</Submit></Link> : (namevalue ? <Link to= '/q1'><Submit onClick={submit}>SUBMIT</Submit></Link> : <Link to='/'><Submit onClick={submitfuc}>SUBMIT</Submit></Link>)} 
        </Container>
    )
}

export default Homepresenter