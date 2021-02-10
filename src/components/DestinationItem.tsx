import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  image: string
  place: string
  price: string
}

const DestinationItem = ({ image, place, price }: Props) => {
  return (
    <GridItem colSpan={{ base: 4, sm: 2, lg: 1 }}>
      <Box position='relative' mb='20px'>
        <Box
          position='absolute'
          bgColor='purple.500'
          color='white'
          px='25px'
          py='10px'
          borderRadius='0 32px 0 32px'
          right='0'
        >
          <Flex align='center'>
            <Image
              src='bintang.svg'
              w={{ base: '14px', md: '20px' }}
              alt='start'
            />
            <Text ml='5px' mb='0' fontSize={{ base: '14px', md: '18px' }}>
              4.5
            </Text>
          </Flex>
        </Box>
        <Image src={image} borderRadius='32px' w='100%' alt='most1' />
      </Box>
      <Box>
        <Text fontWeight='500' fontSize={{ base: '16px', md: '18px' }} mb='8px'>
          {place}
        </Text>
        <Text
          fontWeight='300'
          fontSize={{ base: '14px', md: '16px' }}
          color='gray.500'
        >
          Start from {price}
        </Text>
      </Box>
    </GridItem>
  )
}

export default DestinationItem
