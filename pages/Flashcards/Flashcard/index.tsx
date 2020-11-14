import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import useInit from './effects/useInit';
import CardItem from '../Card';
import { Card } from './interfaces/Card';
// @ts-ignore
import data from './data';

const Flashcard = ({ index, setIndex, setShowTranslation, result, setResult }) => {
  //stan poprawnmosci odpowiedzi
  const { badAnswer, goodAnswer } = useInit();
  const onSwipedLeft = () => {
    //logika przesuniecia w lewo
    const currentResult: { badAnswers: number; goodAnswers: number } = { ...result };
    currentResult.badAnswers += 1;
    setResult(currentResult);
    setIndex(index + 1);
    setShowTranslation(false);
  };
  const onSwipedRight = () => {
    //logika przesuniecia w prawo
    const currentResult: { badAnswers: number; goodAnswers: number } = { ...result };
    currentResult.goodAnswers += 1;
    setResult(currentResult);
    setIndex(index + 1);
    setShowTranslation(false);
  };

  return (
    <View style={style.container}>
      <Text>Your result </Text>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card: Card) => <CardItem card={card} />}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        stackSize={4}
        stackScale={10}
        backgroundColor="#FFFFFF"
        stackSeparation={14}
        disableBottomSwipe
        disableTopSwipe
        overlayLabels={{
          left: badAnswer,
          right: goodAnswer,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffafa',
  },
});

export default Flashcard;
