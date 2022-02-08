import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components'

type SignFormProps = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').required(),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })
  const { errors } = formState

  const handleSign: SubmitHandler<SignFormProps> = async (values) => {}

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSign)}
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
          <Input name="password" type="password" label="Password" error={errors.password} {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
