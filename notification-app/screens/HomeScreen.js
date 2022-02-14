import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const { navigate } = navigation;
  const goToNotification = () => navigate("Notification");
  return (
    <View style={styles.container}>
      <Text>Hello this's HomeScreen</Text>
      <Button onPress={goToNotification} title="Go To Notification" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
