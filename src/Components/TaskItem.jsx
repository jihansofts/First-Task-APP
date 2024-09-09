import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function TaskItem({ item, index, onClearTask }) {
  return (
    <View>
      <Text key={index} style={styles.TextItem}>
        {item.task}
      </Text>
      <Button
        style={{
          backgroundColor: "#00A884",
          color: "white",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => onClearTask(item.id)}
        title="Clear">
        Clear
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  TextItem: {
    marginTop: 10,
    backgroundColor: "#00A884",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});
