import { Button } from '@chakra-ui/react'
import mitt from 'next/dist/shared/lib/mitt'

type Props = {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, onPageChange, number }: Props) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bgColor="gray.700"
      onClick={() => onPageChange(number)}
      _hover={{
        bgColor: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}
