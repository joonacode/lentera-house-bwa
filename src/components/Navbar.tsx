import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import DarkmodeToggle from './DarkmodeToggle'
import Image from 'next/image'

const Navbar = () => {
  return (
    <Box py='20px'>
      <Container maxW='90%'>
        <Flex align='center'>
          <Box borderRadius='full' position='relative' w='50px' h='50px'>
            <Image
              src='/logo.svg'
              layout='fill'
              objectFit='contain'
              alt='logo'
            />
          </Box>
          <Spacer />
          <Box display={{ base: 'block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                size='lg'
                variant='outline'
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Location</MenuItem>
                <MenuItem>Success</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Account</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <HStack spacing='40px' display={{ base: 'none', md: 'flex' }}>
            <Text>Home</Text>
            <Text color='gray.400'>Location</Text>
            <Text color='gray.400'>Success</Text>
            <Text color='gray.400'>Features</Text>
            <Text color='gray.400'>Account</Text>
            <DarkmodeToggle inNavbar />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
