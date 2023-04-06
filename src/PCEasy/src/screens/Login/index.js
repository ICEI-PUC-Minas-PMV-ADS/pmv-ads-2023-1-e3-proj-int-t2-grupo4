import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native'

export const LoginScreen = () => {
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    if (matricula === '123' && senha === 'senha123') {
      Alert.alert('Login realizado com sucesso!')
    } else {
      Alert.alert('Matrícula ou senha inválidos!')
    }
    // Lógica de verificação de credenciais
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        keyboardType="numeric"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    marginBottom: 16,
    textDecorationColor: '#fff',
  },
  button: {
    width: '80%',
    height: 48,
    borderRadius: 24,
    backgroundColor: '#004AAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
