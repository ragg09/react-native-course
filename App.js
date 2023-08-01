import { Fragment, useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import GoalEdit from './components/GoalEdit';

export default function App() {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [goalLists, setGoalLists] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState();

  const addModalHandler = () => {
    setIsOpenAddModal(!isOpenAddModal);
  };

  const editModalHandler = (id, text) => {
    setSelectedGoal({ id, text });
    setIsOpenEditModal(!isOpenEditModal);
  };

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

  const editGoalHandler = (id, updatedData) => {
    setGoalLists((currentGoalLists) => {
      return currentGoalLists.map((goal) => {
        if (goal.id === id) {
          return { ...goal, text: updatedData };
        } else {
          return goal;
        }
      });
    });
  };

  return (
    <Fragment>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Open Add New Goal"
          color={'green'}
          onPress={addModalHandler}
        />
        {isOpenEditModal && (
          <GoalEdit
            onPress={editGoalHandler}
            visible={isOpenEditModal}
            modalHandler={editModalHandler}
            data={selectedGoal}
          />
        )}

        {isOpenAddModal && (
          <GoalInput
            onPress={addGoalHandler}
            visible={isOpenAddModal}
            modalHandler={addModalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalLists}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onPress={deleteGoalHandler}
                  onLongPress={editModalHandler}
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
    </Fragment>
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
