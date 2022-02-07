import { FormControl, FormLabel, Input as CInput, InputProps } from '@chakra-ui/react'

type Props = InputProps & {
  name: string
  label?: string
}

export function Input({ name, label, ...props }: Props) {
  return (
    <FormControl>
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
        {...props}
      />
    </FormControl>
  )
}
