import React from 'react'
import styled from 'styled-components'
import { Avatar, IconButton, Button } from '@mui/material'
import { MoreVertRounded, Chat, Search } from '@mui/icons-material'
import * as EmailValidator from 'email-validator'

export default function Sidebar() {
  const createChat = () => {
    const input = prompt(
      'Please enter email address of user you want to chat with.'
      );
      
    if(!input) return null;
    if(EmailValidator.validate(input)) {
      // We need to add the chats into the db
  }
}
  return (
    <Container>
        <Header>
        <UserAvartar />
        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertRounded /> 
          </IconButton>
        </IconsContainer>
        </Header>
        <SearchContainer>
          <Search />
          <SearchInput placeholder='Search In Chats'/>
        </SearchContainer>
        <SidebarBtn onClick={createChat}>Start a new chat</SidebarBtn>
        {/* List of chat names*/}
    </Container>
  )
}

const Container = styled.div``
const Header = styled.div`
display: flex;
position: sticky;
background-color: #fff;
z-index: 1;
top: 0;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`
const UserAvartar = styled(Avatar)`
cursor: pointer;
:hover{
  opacity: 0.8;
}
`
const IconsContainer = styled.div``
const SearchContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius: 2px;
`
const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`

const SidebarBtn = styled(Button)`
width: 100%;
&&{
  border-top: 1px solid whitesmoke ;
  border-bottom: 1px solid whitesmoke;
}
`