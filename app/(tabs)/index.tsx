import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={styles.container}
    >
      <View className="flex-1 pt-7">
        <ImageViewer imgSource={PlaceholderImage}></ImageViewer>
      </View>
      <View className="items-center" style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
  },
  footerContainer: {
    flex: 1 / 3,
  },
});
