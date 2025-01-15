import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import { ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalActive, setIsModalActive] = useState<boolean>(false)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else alert("You did not select any image");
  };
  
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () =>{
    setIsModalActive(true)
  }

  const onModalClose = () =>{
    setIsModalActive(false)
  }

  const onSaveImageAsync = async() => {

  }
  return (
    <View
      className="flex-1 items-center justify-center"
      style={styles.container}
    >
      <View className="flex-1 pt-7">
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-20">
          <View className="items-center flex-row">
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
          </View>
        </View>
      ): (
      <View className="items-center" style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalActive} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}></EmojiList>
      </EmojiPicker>
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
