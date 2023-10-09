import React, { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi'
  import { Link } from 'react-router-dom'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <>
    <Button pos={'fixed'} zIndex={'overlay'} top={4} left={4} h={10} w={10} p={0} borderRadius={'full'} colorScheme='purple'  onClick={onOpen}>
       <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEOS HUB</DrawerHeader>

          <DrawerBody>
            <VStack  alignItems={'flex-start'}>
                <Button  onClick={onClose} colorScheme='purple' variant={'ghost'}>
                    <Link to={'/'}>Home</Link>
                </Button>
                <Button onClick={onClose}  colorScheme='purple' variant={'ghost'}>
                    <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button onClick={onClose}  colorScheme='purple' variant={'ghost'}>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button onClick={onClose}  colorScheme='purple' variant={'ghost'}>
                    <Link to={'/upload'}>Upload Video</Link>
                </Button>
            </VStack>
            <HStack width={'full'} pos={'absolute'} left={0} bottom={'10'} justifyContent={'space-evenly'}>
                <Button onClick={onClose}  colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                <Button onClick={onClose}  colorScheme='purple' variant={'outline'}>
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
