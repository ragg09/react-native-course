import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image
} from 'react-native';

export default function GoalEdit({ onPress, visible, modalHandler, data }) {
  const [inputGoal, setInputGoal] = useState(data.text);

  const goalInptutHandler = (input) => {
    setInputGoal(input);
  };

  const addGoalHandler = () => {
    if (inputGoal !== '' && inputGoal !== data.text) {
      onPress(data.id, inputGoal);
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
            <Button title="Update" onPress={addGoalHandler} />
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
