import { Container, HStack, Image } from '@chakra-ui/react'
import React from 'react'

const Partner = () => {
  return (
    <Container maxW='100%' mt='100px' mb='80px'>
      <HStack align='center' justify='center' wrap='wrap'>
        <Image
          src='partner1.png'
          w={[50, 70, 100, 160]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          alt='partner1'
        />
        <Image
          src='partner2.png'
          w={[50, 70, 100, 160]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          alt='partner1'
        />
        <Image
          src='partner3.png'
          w={[50, 70, 100, 160]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          alt='partner1'
        />
        <Image
          src='partner4.png'
          w={[50, 70, 100, 160]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          alt='partner1'
        />
        <Image
          src='partner5.png'
          w={[50, 70, 100, 160]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          alt='partner1'
        />
      </HStack>
    </Container>
  )
}

export default Partner
