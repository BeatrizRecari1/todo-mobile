import { View, StyleSheet, Text, Button } from "react-native";

export default function TaskCard({ data }) {
  const { task, done } = data;

  return (
    <View style={styles.taskCardContainer}>
      <Text style={done ? styles.textColorDone : styles.textColor}>
        • {task}
      </Text>
      {/* <Button
          title="Delete"
          color="#841584"
          accessibilityLabel="Delete This"
          style={styles.button}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
  },

  taskCardContainer: {
    backgroundColor: "hotpink",
    padding: 20,
    margin: 5,
  },

  button: {
    backgroundColor: "#000000",
  },

  textColor: {
    fontSize: 20,
    color: "#fff",
    textTransform: "capitalize",
  },

  textColorDone: {
    fontSize: 20,
    color: "pink",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
  },
});
