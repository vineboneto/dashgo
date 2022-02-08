import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input as CInput, InputProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

type Props = InputProps & {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, label, error, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <CInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        ref={ref}
        {...props}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
