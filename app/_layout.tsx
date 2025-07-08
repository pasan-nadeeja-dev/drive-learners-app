import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6939b9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Sri Lanka Driving Exam" }}
      />
      <Stack.Screen
        name="quickTests"
        options={{ headerTitle: "Quick Tests" }}
      />
      <Stack.Screen
        name="questionTypes"
        options={{ headerTitle: "Question Types" }}
      />
      <Stack.Screen name="results" options={{ headerTitle: "Results" }} />
      <Stack.Screen name="roadSigns" options={{ headerTitle: "Road Signs" }} />
    </Stack>
  );
}
