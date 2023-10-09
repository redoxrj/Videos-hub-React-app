import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import { Box, Heading, Image } from '@chakra-ui/react'

const MyCarousel = () => {
    const headingOptions ={
        pos : 'absolute',
        top : '50%',
        left : '50%',
        transform : "translate(-50%, -50%)",
        textTransform : "upperCase",
        p : "4",
        // size : "4xl"
    }
  return (
    <>
    <Carousel autoPlay infiniteLoop interval={1000}  showThumbs={false} showStatus={false} > 
    <Box h={'100vh'} w={'full'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch The future
        </Heading>
    </Box>
    <Box h={'100vh'} w={'full'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'#002272'} color={'white'} {...headingOptions} >
            future is Gaming
        </Heading>
    </Box>
    <Box h={'100vh'} w={'full'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'#45A5CB'} color={'white'} {...headingOptions}>
            GAME is here
        </Heading>
    </Box>
    <Box h={'100vh'} w={'full'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bgColor={'#1B1545'} color={'white'} {...headingOptions}>
            lets go the moon
        </Heading>
    </Box>
    

    </Carousel> 
      
    </>
  )
}

export default MyCarousel
