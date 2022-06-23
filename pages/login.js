
import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import {signInWithPopup } from 'firebase/auth'

function Login() {
    const signIn = () => {
        signInWithPopup(auth, provider)
        .catch(alert)
    }
  return (
    <Container>
    <Head>
        <title>Login</title>
    </Head>
    <LoginCOntainer>
        <Logo src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'/>
        <Button onClick={signIn} variant='outlined'>Sign in with Google</Button>
    </LoginCOntainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`
const LoginCOntainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
background-color: #fff;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`
const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
`