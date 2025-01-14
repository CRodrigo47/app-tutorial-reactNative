import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View className="w-[84px] h-[84px] mx-[60px] border-4 border-[#ffd33d] rounded-[42px] p-0.5">
      <Pressable
        className="flex-1 justify-center items-center rounded-[42px] bg-white"
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}
