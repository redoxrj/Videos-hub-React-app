import { Button, Container, Heading, Input,  VStack } from '@chakra-ui/react'
import React from 'react'

const ForgetPassword = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} padding={'16'}  >
        <form action="">

        <VStack  alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>

            <Heading textAlign={'center'}>Reset Password</Heading>
            <Input required  type={'email'} placeholder='Email for verification' focusBorderColor='purple.500'/>
            <Input required type={'password'} placeholder='new password' focusBorderColor='purple.500'/>
            <Input required type={'password'} placeholder='confirm password' focusBorderColor='purple.500'/>

            
            <Button type='submit' colorScheme='purple'>Reset Password</Button>

    

        </VStack>
        </form>
       

    </Container>
  )
}



export default ForgetPassword
