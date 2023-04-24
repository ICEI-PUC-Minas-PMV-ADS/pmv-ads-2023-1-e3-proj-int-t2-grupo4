import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getUser = async () => {
  try {
    let results = await DB_EXEC(`select * from users`);
    return results.rows._array;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const insertUser = async (param) => {
  try {
    let results = await DB_EXEC(
      `INSERT INTO users (nome, cpf, senha, email, endereco, data_registro, idade) VALUES (?,?,?,?,?,?,?)`,
      [
        param.nome,
        param.cpf,
        param.senha,
        param.email,
        param.endereco,
        param.data_registro,
        param.idade,
      ]
    );
    console.log(results);
    return results.rowsAffected;
  } catch (error) {
    console.error("Erro ao inserir usuário:", error);
    throw error;
  }
};

export const updateUser = async (param) => {
  try {
    let results = await DB_EXEC(
      `update users set nome=?, cpf=?, senha=?, email=?, endereco=?, data_registro=?, idade=?,
      where id=?`,
      [
        param.nome,
        param.cpf,
        param.senha,
        param.email,
        param.endereco,
        param.data_registro,
        param.idade,
        param.id,
      ]
    );

    return results.rowsAffected;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    let results = await DB_EXEC(`delete from users where id=?`, [id]);
    return results.rowsAffected;
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    throw error;
  }
};

// Função para realizar a verificação do login do usuário
export const loginUser = async (cpf, senha) => {
  try {
    const DB_EXEC = Database.getConnection();
    let results = await DB_EXEC(`select * from users where cpf=? and senha=?`, [
      cpf,
      senha,
    ]);

    // Se houver um usuário correspondente, retorne os dados do usuário
    if (results.rows.length > 0) {
      const usuario = results.rows.item(0);
      return usuario;
    }

    // Caso contrário, retorne null indicando que não foi encontrado um usuário válido
    return null;
  } catch (error) {
    // Em caso de erro, trate-o aqui, como exibir uma mensagem de erro ou registrar no console
    console.error("Erro ao realizar login:", error);
    throw error;
  }
};
