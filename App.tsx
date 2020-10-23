import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { TextInput, View, Button, StyleSheet, Text } from 'react-native';

const App = () => {
  const [goals, onChangeGoals] = useState<string>('');
  const [currentGoals, setCurrentGoals] = useState<string[]>([]);

  const handleChangeGoals = useCallback((text) => onChangeGoals(text), [goals]);
  const handleAddGoals = useCallback(() => {
    setCurrentGoals((currentGoals) => [...currentGoals, goals]);
    handleChangeGoals('');
  }, [currentGoals, goals]);

  return (
    <View style={styles.screen}>
      <View style={styles.inputCointer}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeGoals}
          placeholder="Your Goals"
          value={goals}
        />
        <Button title="ADD" onPress={handleAddGoals} />
      </View>
      <View>
        {currentGoals.map((goal, idx) => (
          <Text key={idx}>{goal}</Text>
        ))}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputCointer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { height: 40, borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' },
});
