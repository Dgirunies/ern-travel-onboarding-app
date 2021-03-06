import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";

import { images, theme } from "../../constants";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

const { onboarding1, onboarding2, onboarding3 } = images;

const onBoardings = [
  {
    title: "Lets Travel",
    description: "Lorem ipsum dolor setment das sdaiq Mapoko Admins nitro",
    img: onboarding1,
  },
  {
    title: "Navigation",
    description: "Lorem ipsum dolor setment das sdaiq Mapoko Admins nitro",
    img: onboarding2,
  },
  {
    title: "Destination",
    description: "Lorem ipsum dolor setment das sdaiq Mapoko Admins nitro",
    img: onboarding3,
  },
];

const OnBoarding = () => {
  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {onBoardings.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "10%",
                left: 20,
                right: 20,
              }}
            >
              <Text
                style={{ ...FONTS.h1, color: COLORS.gray, textAlign: "center" }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
});

export default OnBoarding;
