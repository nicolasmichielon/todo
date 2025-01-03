import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 8,
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    borderColor: "#333333",
    borderWidth: 1,
  },
  removeButton: {
    color: "#808080",
    height: 14,
    width: 12,
    marginRight: 15,
  },
  checkButton: {
    marginLeft: 15,
  },
  text: {
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 255,
    minWidth: 255,
    textAlign: "left",
  },
  textChecked: {
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 255,
    minWidth: 255,
    textAlign: "left",
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});
