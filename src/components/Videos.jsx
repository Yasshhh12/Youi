import React, { useState } from 'react';
import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';

const Videos = () => {
  const videosArr = [
    'FnkHcGi3oFo', 
    'cMU0ponFY60',
    'k0h_55Odqyc'
    // Video ID extracted from YouTube URL
   
  ];

  const [videoId, setVideoId] = useState(videosArr[0]);

  // Function to construct the embeddable YouTube video URL
  const constructVideoUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`;

  return (
    <Stack>
      <VStack w={'full'}>
        <iframe
          title="YouTube Video"
          src={constructVideoUrl(videoId)}
          width="100%"
          height="700"
          
          
        />
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>This is a Sample Video for testing and demo.</Text>
        </VStack>
      </VStack>

      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
        {videosArr.map((id, index) => (
          <Button key={index} variant={'ghost'} onClick={() => setVideoId(id)}>
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
