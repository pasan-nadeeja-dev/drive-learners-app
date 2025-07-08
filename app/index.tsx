import Card from "@/components/Card";
import { RootStackParamList } from "@/types/Screens";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function onHandlePress(path: keyof RootStackParamList) {
    navigation.navigate(path);
  }

  return (
    <ScrollView style={styles.container}>
      <Card
        title="Quick Test"
        imageSource={require("../assets/images/quicktest.png")}
        onPress={() => onHandlePress("quickTests")}
      />
      <View style={styles.roadAndQuestionTypesContainer}>
        <Card
          title="Road Signs"
          imageSource={require("../assets/images/roadSigns.png")}
          customContainerStyle={styles.smallContainer}
          onPress={() => onHandlePress("roadSigns")}
        />
        <Card
          title="Question Types"
          imageSource={require("../assets/images/questionTypes.png")}
          customContainerStyle={styles.smallContainer}
          onPress={() => onHandlePress("questionTypes")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roadAndQuestionTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  smallContainer: {
    flex: 1,
  },
});
