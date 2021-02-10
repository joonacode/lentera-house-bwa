import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { dataDestination } from '../dataDummy'
import DestinationItem from './DestinationItem'

const TopDestination = () => {
  return (
    <Container maxW='90%' mb='30px'>
      <Flex justify='center' textAlign='center' mb='60px'>
        <Box w='300px'>
          <Heading as='h2' size='xl' mb='25px'>
            Most People Go
          </Heading>
          <Text color='gray.400'>
            From nature to heart and becomes all what we need to have
          </Text>
        </Box>
      </Flex>
      <Grid
        templateColumns='repeat(4, 1fr)'
        columnGap={{ base: '30px', lg: '30px' }}
        rowGap={{ base: '50px', lg: '30px' }}
      >
        {dataDestination.map((destination, i) => (
          <DestinationItem {...destination} key={i} />
        ))}
      </Grid>
    </Container>
  )
}

export default TopDestination
