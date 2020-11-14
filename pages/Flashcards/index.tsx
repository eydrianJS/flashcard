import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, Button } from 'react-native';
import Flashcard from './Flashcard';
// @ts-ignore
import data from './Flashcard/data';

const Flashcards = () => {
  //Stan obecnego obrazu
  const [index, setIndex] = useState(0);
  //Stan pokazania odpowiedzi
  const [showTranslation, setShowTranslation] = useState(false);
  //Stan liczenia punktów
  const [result, setResult] = useState({ badAnswers: 0, goodAnswers: 0 });
  return (
    <View style={style.container}>
      {result.badAnswers + result.goodAnswers == data.length ? (
        //Podsumowanie po przesunieciu wszystkich
        <View style={style.result}>
          <Text style={style.resultText}>You know {result.goodAnswers} words!!</Text>
          <Text style={style.resultText}>You don't know {result.badAnswers} words.</Text>
        </View>
      ) : (
        //Logika przesuwania kart
        <>
          <View style={style.topText}>
            <Text>Swipe Left if You don't know! </Text>
            <Text>Swipe Right if You know!</Text>
          </View>
          <View style={style.flashcard}>
            <Flashcard
              index={index}
              setIndex={setIndex}
              setShowTranslation={setShowTranslation}
              result={result}
              setResult={setResult}
            />
          </View>
          <View style={style.translation}>
            {showTranslation ? (
              <Text style={style.translationText}>{data[index].polish}</Text>
            ) : (
              false
            )}
          </View>
          <View style={style.button}>
            <Button onPress={() => setShowTranslation(true)} title="Check" />
          </View>
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topText: {
    paddingTop: 10,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    padding: 10,
    flex: 0.8,
    justifyContent: 'center',
  },
  flashcard: {
    flex: 0.9,
  },
  translation: {
    flex: 0.1,
    padding: 50,
  },
  translationText: {
    fontSize: 50,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    padding: 20,
    paddingBottom: 100,
  },
});

export default Flashcards;
