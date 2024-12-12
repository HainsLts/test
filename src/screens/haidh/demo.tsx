import React from "react";
import { NativeBaseProvider, Box, ScrollView } from 'native-base';

import TimeSliderComponent from "@/src/components/TimeSliderComponent"
import FeaturedContent from "@/src/components/FeaturedContent"
import WeatherArticle from "@/src/components/WeatherArticle"
import SponsorsCard from "@/src/components/SponsorsCard"
import CallToActionCard from "@/src/components/CallToActionCard"
import InsuranceCard from "@/src/components/InsuranceCard"
import LocationWeatherWidgetCard from "@/src/components/LocationWeatherWidgetCard"
import RadarCard from "@/src/components/RadarCard"
import VideoCard from "@/src/components/VideoCard"
import { globalStyles } from '@/src/utils/Styles';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/src/types/navigation";
import WeatherInfo from "@/src/components/WeatherInfo"
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

const handleSumit = () => {
};

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Demo() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <NativeBaseProvider >
      <ScrollView h="full">
        <Box style={globalStyles.Container}>
          <Box style={{ marginTop: 40 }}>
            <SponsorsCard />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <TimeSliderComponent />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <WeatherInfo />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <FeaturedContent />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <CallToActionCard />
          </Box>
          <Box style={{ marginTop: 40}}>
            <VideoCard />
          </Box>
          <Box style={{ marginTop: 40}}>
            <WeatherArticle />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <InsuranceCard />
          </Box>
          <Box style={{ marginTop: 40 }}>
            <LocationWeatherWidgetCard />
          </Box>
          <Box style={{ marginTop: 40, marginBottom: 60 }}>
            <RadarCard />
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}
