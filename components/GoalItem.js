import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ id, text, onPress }) {
  return (
    <Pressable onPress={onPress.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8
  },
  goalItemText: {
    color: 'white'
  }
});
