import { ICard } from "@/types/Card";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Card({ title, imageSource, customContainerStyle, onPress }: ICard) {

  return (
    <View style={{...styles.container, ...customContainerStyle}}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View>
          <Image style={styles.imageContainer} source={imageSource} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.customText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 12,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  customText: {
    fontSize: 20,
    color: "#f06094",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
