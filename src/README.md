# Instruções de utilização

## Instalação do Site

O site em HTML/CSS/JS é um projeto estático, logo pode ser utilizado tanto em servidores...

## Histórico de versões

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Adicionado código da tela de login - 
- import React, { Component } from 'react'
import {Alert, Text, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native'

export default class App extends Component {
  clicou = () => {
Alert.alert("Punch Clock Easy", "Logado com Sucesso!");

  }
  render() {
return(
<View style={styles.container}>
  
  <TextInput
  style={styles.input}
placeholder="N° do Funcionario"
  />
   <TextInput
   style={styles.input}
   secureTextEntry={true}
placeholder="Senha"
  />
<TouchableOpacity
  style={styles.botao}
  onPress={() => {this.clicou ()}}
  >
  <Text style={styles.botaoText}>Login</Text>
</TouchableOpacity>
  </View>

  )
 }
}
const styles = StyleSheet.create({
container: {
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor: '#2c3e50'
},
input:{
marginTop:10,
padding:10,
width:300,
backgroundColor: '#fff',
fontSize: 16,
fontWeight: 'bold',
borderRadius:3
},
botao:{
  marginTop: 10,
  width:300,
  height:42,
  backgroundColor: '#3498db',
  borderRadius:4,
  alignItems:'center',
  justifyContent:'center',
  },
botaoText:{
fontSize:16,
fontWeight: 'bold',
color:'#fff'

  }






})
