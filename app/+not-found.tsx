import React from "react";
import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }}></Stack.Screen>
      <View
        className="flex-1 items-center justify-center"
        style={styles.container}
      >
        <Link href="/" className="text-lg underline color-white">
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
  },
});
