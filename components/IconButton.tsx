import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text } from "react-native"


type Props = {
    icon: keyof typeof MaterialIcons.glyphMap
    label: string
    onPress: () => void
}

export default function IconButton({icon, label, onPress}: Props){
    return(
        <Pressable className="justify-center items-center" onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text className="mt-3 color-white">{label}</Text>
        </Pressable>
    )
}