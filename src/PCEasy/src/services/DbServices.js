import * as SQLite from "expo-sqlite";

export const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase("users.db");

    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY NOT NULL,
          nome TEXT NOT NULL,
          cpf TEXT NOT NULL,
          senha TEXT NOT NULL,
          email TEXT NOT NULL,
          endereco TEXT NOT NULL,
          data_registro TEXT NOT NULL,
          idade INTEGER NOT NULL
        );`,
        `CREATE TABLE IF NOT EXISTS times ( 
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          idUser INTEGER NOT NULL,
          data_registro TEXT NOT NULL,
          entrada BOOLEAN NOT NULL
        );`
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
