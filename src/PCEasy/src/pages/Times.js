import React, { useState, useEffect } from "react";
import { DataTable, Appbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getTimes } from "../services/apiServices";
import { View, Text } from "react-native";
import Header from "../components/Header";

export const Times = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.usuario;
  const idUser = userId?.cpf;
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const response = await getTimes(idUser);
      if (response != null) {
        setTimes(response);
        let jString = JSON.stringify(response);
      }
    };

    fetchTimes();
  }, []);

  return (
    <View>
      <Header title="Espelho de ponto">
        {/* Conteúdo da AppBar (Header) */}
      </Header>

      <View style={{ marginTop: 20 }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Dia | Horário</DataTable.Title>
            <DataTable.Title numeric>Ocorrência</DataTable.Title>
          </DataTable.Header>

          {times && times.length > 0 ? (
            times.map((time) => (
              <DataTable.Row key={time.id}>
                <DataTable.Cell>{time.data_registro}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {time.entrada === 0 ? "Entrada" : "Saída"}
                </DataTable.Cell>
              </DataTable.Row>
            ))
          ) : (
            <DataTable.Row>
              <DataTable.Cell>No times available</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </View>
    </View>
  );
};
