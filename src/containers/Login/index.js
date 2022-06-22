import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { useUser } from '../../hooks/UserContext'
import { Container, Box, Input } from './styles'

function Login() {
  const { putUserData, userData } = useUser()

  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite seu nome'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    toast.success('😎 Seja bem vindo', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })

    setTimeout(() => {
      history.push('/')
    }, 1000)

    putUserData(data)
  }

  return (
    <Container>
      <h1>Login Interface</h1>
      <Box>
        <h2>Faça seu login</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            {...register('name')}
            error={errors.nome?.message}
          />
          <p>{errors.nome?.message}</p>

          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <p>{errors.email?.message}</p>

          <Input
            type="password"
            placeholder="Senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Entrar</button>
        </form>
      </Box>
    </Container>
  )
}

export default Login
