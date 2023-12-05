import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjgZL5k-2fkJ5q2IdyN2Mf7_p9InKQx6s",
  authDomain: "meuprimeirofirestore-46a00.firebaseapp.com",
  projectId: "meuprimeirofirestore-46a00",
  storageBucket: "meuprimeirofirestore-46a00.appspot.com",
  messagingSenderId: "932850613454",
  appId: "1:932850613454:web:62e0aab7c2384e3f07a49f"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();
      // console.log(snapshot);

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
