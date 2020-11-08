import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
// @ts-ignore
import data from './data';

const Card = ({ card }) => (
  <View style={style.card}>
    <Image style={style.cardImage} source={{ uri: card.image }} />
  </View>
);

const Flashcards = () => {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    console.log('swipe');
    setIndex(index + 1);
  };

  return (
    <View style={style.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        onSwiped={onSwiped}
        stackSize={4}
        stackScale={10}
        stackSeparation={14}
        disableBottomSwipe
        disableTopSwipe
        overlayLabels={{
          left: {
            title: 'Nope',
            style: {
              label: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: 'Nice!',
            style: {
              label: {
                backgroundColor: 'green',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
        }}
      ></Swiper>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Flashcards;
