import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { Container } from './styles'

function Home() {
  const history = useHistory()
  const { userData } = useUser()

  return (
    <Container>
      <h1>
        Olá {userData.name} <br /> <br /> Seja bem vindo à sua área logada
      </h1>
      <button onClick={() => history.push('login')}>
        <ArrowBackIcon /> Voltar
      </button>
    </Container>
  )
}

export default Home
