import { View, Text, Pressable, StyleSheet } from "react-native";

type TaskCardProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TaskCard({ text, completed, onToggle, onDelete }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <Pressable style={styles.checkboxRow} onPress={onToggle}>
        <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
          {completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.taskText, completed && styles.taskTextCompleted]}>
          {text}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBF4F6",
    borderWidth: 1,
    borderColor: "#5c9ead",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#5c9ead",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#5c9ead",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  taskText: {
    color: "#326273",
    fontSize: 15,
    flexShrink: 1,
  },
  taskTextCompleted: {
    color: "#326273aa",
  },
  deleteText: {
    color: "#C0392B",
    fontSize: 13,
    marginLeft: 10,
  },
});