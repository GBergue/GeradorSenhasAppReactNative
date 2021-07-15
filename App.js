import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clickboard from 'expo-clipboard'

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);

  const charSet = 'abcdefghijklmnopqrstuvwxyz1234567890';

  function generatePass(){
    let pass = '';
    for(let i = 0, n = charSet.length; i < size; i++){
      pass += charSet.charAt(Math.floor(Math.random() * n)); 
    }
    setPassword(pass);
  }

  function copyPass(){
    Clickboard.setString(password);
    alert('Senha copiada com sucesso!')
  }

  return (
    <View style={styles.container}>
      <Image
       source={require('./src/assets/logo.png')}
       style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#FF0000'
          maximumTrackTintColor='#000'
          value={size}
          onValueChange={ (valor) => setSize(valor.toFixed(0))}
        ></Slider>
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

    {password !== '' && (
      <View style={styles.area}>
        <Text style={styles.senha} onLongPress={copyPass}>{password}</Text>
      </View>
    )}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7
  },
  btn: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  senha: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  }
});
