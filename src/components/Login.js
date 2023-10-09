import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} padding={'16'}  >
        <form action="">

        <VStack  alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>

            <Heading textAlign={'center'}>Welcome Back</Heading>
            <Input required  type={'email'} placeholder='Email' focusBorderColor='purple.500'/>
            <Input required type={'password'} placeholder='password' focusBorderColor='purple.500'/>

            <Button variant='link' colorScheme='purple' alignSelf={'flex-end'}>
                <Link to={'/forgotpassword'}>forget password?</Link>
            </Button>
            <Button type='submit' colorScheme='purple'>Log In</Button>

            <Text alignSelf={'flex-end'}> new user? <Button variant='link' colorScheme='purple' alignSelf={'flex-end'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>

            </Text>

        </VStack>
        </form>
       

    </Container>
  )
}

export default Login
