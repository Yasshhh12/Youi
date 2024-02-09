import { Box,Heading,Image,Container, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.png"

const HeadingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:'4xl'
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p='16'>
        <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m='auto'>
          Services
        </Heading>

        <Stack h="full" p={'4'} alignItems={'center'} direction={['coloumn','row']}>
         <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
         <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
         Discover a world of gaming excellence with our diverse range of services. 
         Dive into expert game reviews and recommendations, engage with our lively community forums for tips and strategies, 
         and explore comprehensive game guides and walkthroughs to conquer every challenge. 
         Participate in thrilling gaming events and tournaments, explore our curated collection of gaming merchandise, 
         and enjoy captivating live gameplay and tutorials from top streamers. 
         Need assistance? Our prompt technical support is here to help. Plus, unlock exclusive discounts on 
         games and gear and stay updated with the latest gaming news. 
         Join our vibrant community today and elevate your gaming experience to new heights.
         </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
      
      <Box w='full' h={'100vh'}>
       <Image src={img1} />
       <Heading bgColor={"blackAlpha.600"} color={'white'} {...HeadingOptions}>Watch The Future</Heading>
      </Box>

      <Box w='full' h={'100vh'}>
       <Image src={img2} />
       <Heading bgColor={"blackAlpha.600"} color={'white'} {...HeadingOptions}>Because Gaming is the Future!!</Heading>
      </Box>

      <Box w='full' h={'100vh'}>
       <Image src={img3} />
       <Heading bgColor={"whiteAlpha.600"} color={'white'} {...HeadingOptions}>Gaming On Console</Heading>
      </Box>

      <Box w='full' h={'100vh'}>
       <Image src={img4} />
       <Heading bgColor={"whiteAlpha.600"} color={'white'} {...HeadingOptions}>Night life is Cool</Heading>
      </Box>

    </Carousel>
)

