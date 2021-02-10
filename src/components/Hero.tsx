import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  const bgInput = useColorModeValue('gray.50', 'gray.700')

  return (
    <Box>
      <Flex>
        <Box ml='6%' mt='30px' w={{ base: '100%', md: '50%' }}>
          <Flex flexDir='column'>
            <Heading
              as='h1'
              fontSize={{ base: '40px', md: '50px' }}
              lineHeight={{ base: 'auto', md: '62px' }}
            >
              We have thousand
              <br /> of your dream home
            </Heading>
            <Text mt='20px' color='gray.400' lineHeight='28px'>
              A light that will guide you to find what you’ve
              <br /> been looking for long long time ago
            </Text>
            <HStack mt='30px' spacing='30px'>
              <Flex direction='column'>
                <Text fontSize='24px' fontWeight='500'>
                  18<span style={{ color: '#8080FF' }}>K</span>
                </Text>
                <Text color='gray.400'>apartment</Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='24px' fontWeight='500'>
                  52<span style={{ color: '#8080FF' }}>K</span>
                </Text>
                <Text color='gray.400'>success</Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='24px' fontWeight='500'>
                  14<span style={{ color: '#8080FF' }}>M</span>
                </Text>
                <Text color='gray.400'>transactions</Text>
              </Flex>
            </HStack>
            <Box mt='34px'>
              <Text size='sm' mb='5px' color='gray.500'>
                Location
              </Text>
              <Input
                type='text'
                placeholder='Sarch city'
                maxW='350px'
                value='Bandung, Jawa Barat'
                bgColor={bgInput}
                border='none'
                rounded='none'
              />
              <Button
                colorScheme='orange'
                opacity='60%'
                fontSize='15px'
                fontWeight='500'
                px='28px'
                mt='15px'
                rounded='none'
                shadow='xl'
                display='block'
              >
                Explore Now
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w='50%' display={{ base: 'none', md: 'block' }}>
          <Image src='banner.png' w='100%' alt='hero' />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
