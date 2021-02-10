import { Box } from '@chakra-ui/react'
import React from 'react'
import DarkmodeToggle from '../components/DarkmodeToggle'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Partner from '../components/Partner'
import TopDestination from '../components/TopDestination'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <TopDestination />
      <Footer />
      <Box display={{ base: 'block', md: 'none' }}>
        <DarkmodeToggle />
      </Box>
      {/* <Box bg='red.200' w={[300, 400, 1260]}>
        This is a box
      </Box> */}
    </div>
  )
}

export default Index
