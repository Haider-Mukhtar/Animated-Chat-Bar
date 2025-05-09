import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import AnimatedChatBarIcon from "./animated-chat-bar-icon";

const BAR_WIDTH = 292;
const BAR_HEIGHT = 75;

const AnimatedChatBar = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const [showMedias, setShowMedias] = useState(false);

  const addButtonRotation = useSharedValue(0);
  const containerRotation = useSharedValue(0);
  const optionsRotation = useSharedValue(0);

  const handlePress = () => {
    setShowMedias((prev) => !prev);

    addButtonRotation.value = withTiming(showMedias ? 0 : -135);
    optionsRotation.value = withTiming(showMedias ? 0 : 90);
    // containerRotation.value = withSequence(
    //   withTiming(showMedias ? 5 : -5),
    //   withTiming(0)
    // );
  };

  const rAddButtonStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${addButtonRotation.value}deg` }],
  }));

  const rContainerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -BAR_WIDTH / 2 },
      { rotate: `${containerRotation.value}deg` },
      { translateX: BAR_WIDTH / 2 },
    ],
  }));

  const rOptionsStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: BAR_WIDTH / 2 },
      { rotate: `${optionsRotation.value}deg` },
      { translateX: -BAR_WIDTH / 2 },
    ],
  }));

  return (
    <Animated.View style={[styles.container, rContainerStyle]}>
      <Animated.View style={[styles.optionsContainer, rOptionsStyle]}>
        <View style={styles.message}>
          <View style={styles.textInput}>
          <TextInput
              placeholder="Message..."
            />
          </View>
        </View>
        <View style={styles.medias}>
          <AnimatedChatBarIcon name="videocam-outline" />
          <AnimatedChatBarIcon name="camera-outline" />
          <AnimatedChatBarIcon name="image-outline" />
        </View>
      </Animated.View>
      <AnimatedPressable onPress={handlePress} style={rAddButtonStyle}>
        <AnimatedChatBarIcon name="add-outline" />
      </AnimatedPressable>
    </Animated.View>
  );
};

export default AnimatedChatBar;

const styles = StyleSheet.create({
  container: {
    height: BAR_HEIGHT,
    width: '100%',
    flexDirection: "row-reverse",
    alignItems: "center",
    overflow: "hidden",
    padding: 20,
    backgroundColor: "#fff",
  },
  message: {
    ...StyleSheet.absoluteFillObject,
    padding: 14,
    paddingRight: 89,
  },
  optionsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  textInput: {
    backgroundColor: "#fff",
    height: BAR_HEIGHT - 28,
    justifyContent: "center",
    paddingLeft: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 1,
    shadowColor: "#000",
    marginLeft: 10,
  },
  medias: {
    ...StyleSheet.absoluteFillObject,
    padding: 14,
    paddingLeft: 70,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    transform: [
      { translateX: BAR_WIDTH / 2 },
      { rotate: "90deg" },
      { translateX: BAR_WIDTH / 2 },
    ],
  },
  text: {
    color: "#000",
  },
});
