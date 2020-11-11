import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import iCard from './interfaces/iCard';

const Card = ({ card }: iCard) => (
  <View style={style.card}>
    <Text style={style.cardImage}>{card.english}</Text>
  </View>
);

const style = StyleSheet.create({
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    borderColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099ff',
    display: 'flex',
  },
  cardImage: {
    color: 'white',
    fontSize: 50,
  },
});
export default Card;
