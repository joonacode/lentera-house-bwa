import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import React from 'react'
import { dataTestimoni } from '../dataDummy'
import TestimoniItem from './TestimoniItem'

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Box position='relative' mt='150px'>
      {colorMode === 'light' ? (
        <Box
          bgImage="url('footer-rec.png')"
          bgRepeat='no-repeat'
          bgPosition='left'
          bgSize='cover'
          position='absolute'
          borderRadius='0 50px 0 0'
          h='100%'
          w={{ base: '100%', lg: '70%' }}
        ></Box>
      ) : (
        <Box
          bgColor='gray.900'
          position='absolute'
          borderRadius='0 50px 0 0'
          h='100%'
          w={{ base: '100%', lg: '70%' }}
        ></Box>
      )}
      <Box py='90px' pl='7%' pr={{ base: '7%', md: 0 }} overflow='hidden'>
        <Grid templateColumns='repeat(9, 1fr)' gap='40px'>
          <GridItem colSpan={{ base: 9, lg: 3 }} zIndex={100}>
            <Heading as='h2' size='xl' mb='20px' pt='10px'>
              Become a part of our community
            </Heading>
            <Text color='gray.400'>
              Grow and live together to pursue happiness that we always dreaming
              of
            </Text>
            <HStack mt='20px' spacing='14px'>
              <Image src='playstore.png' alt='hstack' w='100px' />
              <Image src='appstore.png' alt='hstack' w='100px' />
            </HStack>
          </GridItem>
          {dataTestimoni.map((testimoni, i) => (
            <TestimoniItem {...testimoni} key={i} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
