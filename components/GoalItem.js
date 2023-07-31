import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ id, text, onPress }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onPress.bind(this, id)}
        android_ripple={{ color: 'white' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    color: 'white',
    padding: 8
  }
});
