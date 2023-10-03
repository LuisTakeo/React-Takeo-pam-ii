import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const image = {uri:'https://w.forfun.com/fetch/20/2004e36c8a5e6e5c95c3374144f76808.jpeg'}   


const Musicas = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode= 'cover' style={styles.image} > 
      <Text style={styles.title}>Letra da Música</Text>
      <Text style={styles.description}>Meu bem, guarde uma frase pra mim dentro da sua canção
Esconda um beijo pra mim sob as dobras do blusão
Eu quero um gole de cerveja
No seu copo, no seu colo e nesse bar
Meu bem, o meu lugar é onde você quer que ele seja
Não quero o que a cabeça pensa, eu quero o que a alma deseja
Arco-íris, anjo rebelde, eu quero o corpo
Tenho pressa de viver
Mas quando você me amar
Me abrace e me beije bem devagar
Que é para eu ter tempo, tempo de me apaixonar
Tempo para ouvir o rádio no carro
Tempo para a turma do outro bairro ver e saber que eu te amo
Meu bem, o mundo inteiro está naquela estrada ali em frente
Tome um refrigerante, coma um cachorro-quente
Sim, já é outra viagem
E o meu coração selvagem tem essa pressa de viver

</Text>
</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
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
        color:'#fff'
      },
    });
    
    export default Musicas;
    