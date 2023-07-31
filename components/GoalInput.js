import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  Image
} from 'react-native';

export default function GoalInput({ onPress, visible, modalHandler }) {
  const [inputGoal, setInputGoal] = useState('');

  const goalInptutHandler = (input) => {
    setInputGoal(input);
  };

  const addGoalHandler = () => {
    if (inputGoal !== '') {
      onPress(inputGoal);
      setInputGoal('');
      modalHandler();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/android-apple.gif')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInptutHandler}
          value={inputGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Cancel" onPress={modalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  buttonView: {
    width: 100,
    marginHorizontal: 8
  }
});
