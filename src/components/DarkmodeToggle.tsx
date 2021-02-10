import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

type Props = {
  inNavbar?: boolean
}

const DarkmodeToggle = ({ inNavbar }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  if (inNavbar) {
    return (
      <div>
        <Button
          colorScheme='blue'
          onClick={toggleColorMode}
          rounded='full'
          shadow='lg'
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    )
  }
  return (
    <div>
      <Button
        onClick={toggleColorMode}
        position='fixed'
        bottom='30px'
        colorScheme='blue'
        rounded='full'
        right='30px'
        shadow='lg'
        size='lg'
        zIndex={200}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  )
}

export default DarkmodeToggle
