import { Box, GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface Props {
  image: string
  name: string
  desc: string
}

const TestimoniItem = ({ image, name, desc }: Props) => {
  const bg = useColorModeValue('gray.100', 'gray.900')
  return (
    <GridItem
      colSpan={{ base: 9, md: 3, lg: 2 }}
      display={{ base: 'none', md: 'block' }}
      position='relative'
    >
      <Image src={image} alt='people1' rounded='34px' />

      <Box
        bgColor={bg}
        p='10px'
        w='180px'
        rounded='14px'
        position='absolute'
        bottom='20px'
        shadow='lg'
        right='-10px'
      >
        <Text fontSize='sm' fontWeight='500'>
          {name}
        </Text>
        <Text fontSize='xs' color='gray.500'>
          {desc}
        </Text>
      </Box>
    </GridItem>
  )
}

export default TestimoniItem
