import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerCloseButton,DrawerContent,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'



const Header = () => {

  const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
      <Button pos={'fixed'} top={4} left={'4'}  p={'0'} h={'10'} w={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'overlay'}>
      <BiMenuAltLeft />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
       <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Stream Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>

              <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>

            </VStack>

            <HStack pos={'absolute'} bottom={'10'} justifyContent={'space-evenly'} w={'full'} left={'0'}>

              <Button colorScheme='purple'>
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button colorScheme='purple' variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>

            </HStack>


          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header