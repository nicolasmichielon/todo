import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
  },
  form: {
    marginTop: 40,
    marginBottom: 32,
    flexDirection: "row",
    width: "100%",
    gap: 4,
  },
  listHeader: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  doneText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  clipboardImage: {
    height: 56,
    width: 56,
  },
  noTasks: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },
  noTasksTitle: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 16,
  },
  noTasksText: {
    color: "#808080",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#1E6F9F",
    minWidth: 52,
    minHeight: 52,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 24,
  },
  numberBox: {
    backgroundColor: "#333333",
    height: 19,
    width: 24,
    color: "#D9D9D9",
    borderRadius: 999,
    textAlign: "center",
    marginLeft: 8,
  },
});
