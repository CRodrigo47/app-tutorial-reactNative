import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center" style={styles.container}>
      <Text className="color-red-200">
        Home Screen
      </Text>
    <Link href="/about" className="text-lg color-white underline">Go to about screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
  },
});
