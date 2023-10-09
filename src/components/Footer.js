import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend , AiOutlineGithub ,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack w={'full'} alignItems={'stretch'}>
                <Heading size='md' textTransform={'uppercase'}>
                    Subscribe to get updates

                </Heading>
                <HStack >
                   <Input w={'67%'} placeholder='Abc@email.com'/>
                    <Button  borderRadius={'0 20px 20px 0'} p={'0'} colorScheme='purple' >
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack  w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'}>
                    videos hub
                </Heading>
                <Text textAlign={'center'}><span style={{color:"#e14de1"}}>Rajnish Kumar </span>&copy;all rights reserved</Text>


            </VStack>

            <VStack  w={'full'} >
                <Heading size={'md'} textTransform={'uppercase'}> Follow Us
                
                </Heading>
                <HStack>
                    <a href="https://www.linkedin.com/in/rajnish-kumar-redoxrj/" target={'blank'} style={{color:'aqua'}}>Linkedin</a>
                    <AiFillLinkedin size={'2.5vmax'}/>
                </HStack>
                <HStack>
                    <a href="https://github.com/redoxrj" target={'blank'} style={{color:'yellow'}}>Github</a>
                    <AiOutlineGithub size={'2.5vmax'}/>
                </HStack>
                


            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
