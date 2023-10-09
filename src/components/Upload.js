import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>

        <HStack>
            <Input type='file' border={'1px solid green'} css={{
                '&::file-selector-button':{
                    border:'none',
                    height:"100%",
                    marginLeft : '-18px',
                    color :'red',
                    backgroundColor:'white',
                    // width: 'calc(100% + 36px)',
                    cursor: 'pointer'
                }
            }}/>
            <Button colorScheme='purple' type='submit' >Upload</Button>
        </HStack>

    </VStack>

   </Container>
  )
}

export default Upload
