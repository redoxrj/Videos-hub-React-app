import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} padding={'16'}  >
        <form action="">

        <VStack  alignItems={'stretch'} spacing={'6'} w={['full', '96']} m={'auto'} my={'0'}>

            <Heading textAlign={'center'}>Videos Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input required  type={'text'} placeholder='Name' focusBorderColor='purple.500'/>
            <Input required  type={'email'} placeholder='Email' focusBorderColor='purple.500'/>
            <Input required type={'password'} placeholder='password' focusBorderColor='purple.500'/>

           
            <Button type='submit' colorScheme='purple'>Sign Up</Button>

            <Text alignSelf={'flex-end'}> Already have an account? <Button variant='link' colorScheme='purple' alignSelf={'flex-end'}>
                <Link to={'/login'}>Log In</Link>
            </Button>

            </Text>

        </VStack>
        </form>
       

    </Container>
  )
}



export default Signup
