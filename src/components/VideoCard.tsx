import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Text, Slider, HStack, Icon, VStack, Image } from 'native-base';
import Video from 'react-native-video';
import { Ionicons } from '@expo/vector-icons';

const CustomVideoPlayer: React.FC = () => {
  const videoRef = useRef<Video | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  const onProgress = (data: { currentTime: number }) => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setIsPaused(true);
    setCurrentTime(0);
    videoRef.current?.seek(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <NativeBaseProvider>
      <Box
        borderWidth={1}
        borderColor="coolGray.200"
        borderRadius="lg"
        shadow={2}
        overflow="hidden"
        width="90%"
        alignSelf="center"
      >
        {/* Video Player */}
        <Box position="relative" style={{ aspectRatio: 16 / 9 }}>
          <Video
            ref={videoRef}
            source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
            style={StyleSheet.absoluteFill}
            resizeMode={isFullScreen ? 'cover' : 'contain'}
            paused={isPaused}
            volume={volume}
            onProgress={onProgress}
            onLoad={(data) => setDuration(data.duration)}
            onEnd={onEnd}
          />

          {/* Nút Play/Pause */}
          <TouchableOpacity
            style={styles.playButton}
            onPress={togglePlayPause}
          >
            <Icon
              as={Ionicons}
              name={isPaused ? 'play-circle' : 'pause-circle'}
              size="xl"
              color="white"
            />
          </TouchableOpacity>
        </Box>

        {/* Thanh Tiến trình */}
        <HStack alignItems="center" space={4} marginTop={4} paddingX={4}>
          <Text fontSize="sm">{formatTime(currentTime)}</Text>
          <Slider
            flex={1}
            value={currentTime}
            maxValue={duration}
            onChange={(value) => videoRef.current?.seek(value)}
          >
            <Slider.Track>
              <Slider.FilledTrack backgroundColor="blue.500" />
            </Slider.Track>
            <Slider.Thumb backgroundColor="blue.500" />
          </Slider>
          <Text fontSize="sm">{formatTime(duration)}</Text>
        </HStack>

        {/* Điều khiển Âm lượng và Full-screen */}
        <HStack justifyContent="space-between" alignItems="center" marginTop={4} paddingX={4}>
          {/* Điều chỉnh âm lượng */}
          <HStack alignItems="center" space={2}>
            <Icon as={Ionicons} name="volume-medium" size="sm" />
            <Slider
              value={volume}
              maxValue={1}
              step={0.1}
              onChange={(value) => setVolume(value)}
              width="150px"
            >
              <Slider.Track>
                <Slider.FilledTrack backgroundColor="blue.500" />
              </Slider.Track>
              <Slider.Thumb backgroundColor="blue.500" />
            </Slider>
          </HStack>

          {/* Chế độ Full-screen */}
          <TouchableOpacity onPress={() => setIsFullScreen(!isFullScreen)}>
            <Icon as={Ionicons} name={isFullScreen ? 'contract' : 'expand'} size="lg" />
          </TouchableOpacity>
        </HStack>

        {/* Content Section */}
        <VStack padding={4} space={2}>
          <HStack alignItems="center" space={2}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40x40.png?text=CNN' }}
              alt="Channel Thumbnail"
              width={6}
              height={6}
              borderRadius="7"
            />
            <Text fontSize="sm" fontWeight="bold" color="coolGray.600">
              CNN Weather brief
            </Text>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default CustomVideoPlayer;
