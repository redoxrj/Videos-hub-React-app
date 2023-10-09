import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import MyCarousel from '../components/MyCarousel.js';
import img5 from '../assets/5.png'


const Home = () => {
  return (
  <Box>
    <MyCarousel/>
    <Container maxW={'container.lg'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} w={'fit-content'} m={'auto'} borderBottom={'2px solid '} py={'2'}>Our Services</Heading>
        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
         <Image src={img5} h={['40','300']} filter={'hue-rotate(-130deg)'}/>
         <Text letterSpacing={'widest'} p={['0','8']} textAlign={'center'} lineHeight={'190%'}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
         </Text>
        </Stack>
    </Container>

  </Box>
  )
}

export default Home
