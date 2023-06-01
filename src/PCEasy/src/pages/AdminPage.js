import React, { useState, useEffect } from "react";
import { Appbar, Button, Searchbar } from "react-native-paper";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getUserByCpf, getUser, deleteUser } from "../services/GastosServicesDB";
import { IconButton } from "react-native-paper";

const AdminPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const deleteUser = async (id) => {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const allUsers = await getUser();
        setUsers(allUsers);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async () => {
    try {
      const user = await getUserByCpf(searchQuery);

      if (user) {
        setSearchResults([user]);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <View>
        <Text>{`Nome: ${item.nome}`}</Text>
        <Text>{`CPF: ${item.cpf}`}</Text>
        <Text>{`Email: ${item.email}`}</Text>
        {/* Exiba os outros campos do usuário conforme necessário */}
      </View>
      <IconButton style={styles.deleteButton}
        icon="delete"
        color="#FF0000"
        onPress={() => deleteUser(item.id)}
      />
    </View>
  );

  const renderUsers = () => {
    if (searchResults.length > 0) {
      return (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    } else {
      return (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Tela Administrativa" />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Buscar usuário por CPF"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
            iconColor="#fff"
          />
          <Button
            mode="contained"
            onPress={handleSearch}
            style={styles.button}
            color="#004aad"
          >
            <MaterialCommunityIcons name="magnify" size={24} color="white" />
          </Button>
        </View>
        {renderUsers()}
        {users.length === 0 && <Text>Nenhum usuário encontrado.</Text>}
      </View>
    </View>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarHeader: {
    backgroundColor: "#004aad",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006DFF",
  },
  IconButton: {
    alignItems: "right",
  },
  userItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    paddingRight: 250,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteButton: {
    marginLeft: 150,
  }

});
