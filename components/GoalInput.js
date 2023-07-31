import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from 'react-native';

export default function GoalInput({ onPress }) {
  const [inputGoal, setInputGoal] = useState('');

  const goalInptutHandler = (input) => {
    setInputGoal(input);
  };

  const addGoalHandler = () => {
    onPress(inputGoal);
    setInputGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInptutHandler}
        value={inputGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
});
