import React from 'react'
import {Box, Button, HStack, Heading, Input, Stack,VStack, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='10' color={'white'}>
     <Stack direction={['column','row']}>
      <VStack alignItems={'stretch'} w={'full'} px={'4'}>

       <Heading size={'md'} textTransform={'uppercase'}>
        Subscribe to get updates
       </Heading>

       <HStack borderBottom={'2px solid white'} py={'2'}>

        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' _placeholder={{ color: 'white' }}/>

        <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'} >
          <AiOutlineSend size={20}/>  
        </Button>

       </HStack>
      </VStack>

      <VStack w={'full'} 
       borderLeft={['none','1px solid white']}
       borderRight={['none','1px solid white']}
      >
        <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
        </Heading>
        <Text>@All Rights Reserved</Text>
      </VStack>

      <VStack w={'full'} 
       
      ></VStack>

     </Stack>

    </Box>
  )
}

export default Footer