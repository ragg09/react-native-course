import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalLists, setGoalLists] = useState([]);

  const addGoalHandler = (inputGoal) => {
    setGoalLists((currentGoalLists) => [
      ...currentGoalLists,
      { text: inputGoal, id: Math.random() }
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalLists((currentGoalLists) => {
      return currentGoalLists.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onPress={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalLists}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onPress={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  goalsContainer: {
    flex: 4
  }
});
