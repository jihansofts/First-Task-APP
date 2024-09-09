import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function TaskItem({ item, index, onClearTask }) {
  return (
    <View style={styles.container}>
      <Text key={index} style={styles.TextItem}>
        {item.task}
      </Text>
      <Pressable
        style={{
          backgroundColor: "red",
          color: "white",
          marginTop: 3,
          padding: 8,
          borderRadius: 5,
          width: "20%",
        }}
        onPress={onClearTask.bind(this, item.id)}
        title="Clear">
        <Text style={{ color: "white" }}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  TextItem: {
    marginTop: 5,
    backgroundColor: "#00A884",
    color: "white",
    padding: 10,
    borderRadius: 5,
    width: "75%",
  },
});
