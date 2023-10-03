import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
const image = {uri:'https://w.forfun.com/fetch/20/2004e36c8a5e6e5c95c3374144f76808.jpeg'}

const Artistas = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode= 'cover' style={styles.image} > 
      <Text style={styles.title}>Descrição do Autor</Text>
      <Text style={styles.description}>Antônio Carlos Belchior, mais conhecido como Belchior Sobral, 26 de outubro de 1946 — Santa Cruz do Sul, 30 de abril de 2017, foi um cantor, poeta, compositor, músico, produtor, artista plástico e professor brasileiro.</Text>
    </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
});

export default Artistas;
