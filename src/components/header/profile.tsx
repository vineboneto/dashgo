import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex>
      <Box mr="4" textAlign="center">
        <Text>Vinicius Gazolla Boneto</Text>
        <Text color="gray.300" fontSize="small">
          vineboneto@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Vinicius Gazolla Boneto" src="https://github.com/vineboneto.png" />
    </Flex>
  )
}
