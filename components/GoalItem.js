import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from 'react-native';

export default function GoalItem({ id, text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>
        {id}. {text}
      </Text>
    </View>
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
