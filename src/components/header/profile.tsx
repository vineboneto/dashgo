import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type Props = {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: Props) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Vinicius Gazolla Boneto</Text>
          <Text color="gray.300" fontSize="small">
            vineboneto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Vinicius Gazolla Boneto" src="https://github.com/vineboneto.png" />
    </Flex>
  )
}
