import {
  Box,
  Flex,
  GridItem,
  Image as ImageChakra,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  place: string
  price: string
}

const DestinationItem = ({ image, place, price }: Props) => {
  return (
    <GridItem colSpan={{ base: 4, sm: 2, lg: 1 }}>
      <Box position='relative' mb='20px' overflow='hidden' borderRadius='32px'>
        <Box
          position='absolute'
          bgColor='purple.500'
          color='white'
          px='25px'
          py='10px'
          borderRadius='0 32px 0 32px'
          right='0'
          zIndex={100}
        >
          <Flex align='center'>
            <ImageChakra
              src='/bintang.svg'
              w={{ base: '14px', md: '20px' }}
              alt='start'
            />
            <Text ml='5px' mb='0' fontSize={{ base: '14px', md: '18px' }}>
              4.5
            </Text>
          </Flex>
        </Box>
        <Box
          borderRadius='32px'
          w='100%'
          h={{ base: '200px', md: '400px', lg: '300px' }}
          position='relative'
        >
          <Image src={image} alt={place} layout='fill' objectFit='cover' />
        </Box>
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
