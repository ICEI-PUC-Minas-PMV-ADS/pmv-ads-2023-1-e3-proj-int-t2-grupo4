import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { getUserById, updateUser } from "../services/GastosServicesDB";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function UpdateUser() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [dataRegistro, setDataRegistro] = useState("");
    const [idade, setIdade] = useState("");
    const navigation = useNavigation();
    const route = useRoute();
    const userId = route.params.userId;

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUserById(userId);
            setNome(userData.nome);
            setCpf(userData.cpf);
            setSenha(userData.senha);
            setEmail(userData.email);
            setEndereco(userData.endereco);
            setDataRegistro(userData.data_registro);
            setIdade(userData.idade);
        };
        fetchUserData();
    }, [userId]);

    const handleFormSubmit = async () => {
        // Chamar a função updateUser para atualizar os dados no banco de dados
        const result = await updateUser({
          id: userId,
          nome,
          cpf,
          senha,
          email,
          endereco,
          data_registro: dataRegistro,
          idade,
        });
      
        if (result > 0) {
          Alert.alert("Sucesso", "Dados atualizados com sucesso!", [
            { text: "OK", onPress: () => navigation.goBack() },
          ]);
        } else {
          Alert.alert(
            "Erro",
            "Ocorreu um erro ao atualizar os dados no banco de dados."
          );
        }
      };

    return (
        <View style={styles.container}>
            
            <View style={styles.formContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} value={nome} onChangeText={setNome} />
                <Text style={styles.label}>CPF:</Text>
                <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                    style={styles.input}
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <Text style={styles.label}>Idade:</Text>
                <TextInput
                    style={styles.input}
                    value={idade}
                    onChangeText={setIdade}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFormSubmit} // chamar handleFormSubmit quando botão for pressionado
                >
                    <Text style={styles.buttonText}>Atualizar Usuário</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        width: "50%",
        height: 40,
        borderRadius: 5,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        alignItems: "center",

    },

    button: {
        backgroundColor: "#4287f5",
        borderRadius: 5,
        padding: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
    },

    label: {
        fontSize: 20,
        justifyContent: "center",
        fontWeight: "bold",
        marginBottom: 15,
    },
});
