import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';

const Informacoes = () => {
  const clickHandler = () => {
    alert('Alucinação é o segundo álbum de estúdio do cantor e compositor brasileiro Belchior, lançado em 1976 pela gravadora PolyGram, através do selo Philips (atual Universal Music). Conta com sucessos que consagraram o cantor, como "Apenas um Rapaz Latino-Americano", "Como Nossos Pais" e "Velha Roupa Colorida". Graças a esses hits, o álbum vendeu trinta mil cópias em apenas um mês. No total, o álbum vendeu mais de quinhentos mil cópias, consagrando-o como um ídolo de massa.');
  };

const image = {uri:'https://w.forfun.com/fetch/20/2004e36c8a5e6e5c95c3374144f76808.jpeg'}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode= 'cover' style={styles.image} > 

        <Text style={styles.titleStyle}>
          Informações sobre o artista!
        </Text>
        <Text style={styles.textStyle}>
          Clique no botão para saber mais.
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
                uri:
                'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Informacoes;

const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#fff',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: '#fff',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
});