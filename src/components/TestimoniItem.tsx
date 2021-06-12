import { Box, GridItem, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

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
      <Box
        rounded='34px'
        overflow='hidden'
        width='90%'
        height='260px'
        position='relative'
      >
        <Image src={image} layout='fill' objectFit='cover' alt={name} />
      </Box>

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
