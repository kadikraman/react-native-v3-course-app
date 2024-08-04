import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping list" }} />
      <Stack.Screen
        name="counter"
        options={{ title: "Counter", presentation: "modal" }}
      />
      <Stack.Screen
        name="idea"
        options={{ title: "My idea", presentation: "modal" }}
      />
    </Stack>
  );
}
