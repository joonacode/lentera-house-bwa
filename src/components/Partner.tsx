import { Box, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const Partner = () => {
  return (
    <Container maxW='100%' mt='100px' mb='80px'>
      <HStack align='center' justify='center' wrap='wrap'>
        <Box
          w={[50, '100px', 100, 160]}
          h={[10]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          position='relative'
        >
          <Image
            objectFit='contain'
            src='/partner1.png'
            layout='fill'
            alt='partner1'
          />
        </Box>
        <Box
          w={[50, '100px', 100, 160]}
          h={[10]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          position='relative'
        >
          <Image
            objectFit='contain'
            src='/partner2.png'
            layout='fill'
            alt='partner2'
          />
        </Box>
        <Box
          w={[50, '100px', 100, 160]}
          h={[10]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          position='relative'
        >
          <Image
            objectFit='contain'
            src='/partner3.png'
            layout='fill'
            alt='partner3'
          />
        </Box>
        <Box
          w={[50, '100px', 100, 160]}
          h={[10]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          position='relative'
        >
          <Image
            objectFit='contain'
            src='/partner4.png'
            layout='fill'
            alt='partner4'
          />
        </Box>
        <Box
          w={[50, '100px', 100, 160]}
          h={[10]}
          mx={{ base: '20px', md: '30px', lg: '40px' }}
          my='14px'
          position='relative'
        >
          <Image
            objectFit='contain'
            src='/partner5.png'
            layout='fill'
            alt='partner5'
          />
        </Box>
      </HStack>
    </Container>
  )
}

export default Partner
