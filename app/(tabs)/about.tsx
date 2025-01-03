import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      className="flex-1 justify-center items-center"
      style={styles.container}
    >
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
});
