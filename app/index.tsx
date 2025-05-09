import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AnimatedChatBar from "@/components/animated-chat-bar";

const ChatBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar style="dark" />
        <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20, }}>
          <Text style={{fontSize:16, fontWeight: 'bold', textAlign: "center", fontFamily:'Poppins' }}>Animated Chat Bar</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#ddd' }} />
        {/* Animated Chat Bar */}
        <AnimatedChatBar />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatBar;
