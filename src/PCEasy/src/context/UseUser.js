// useUser.js

import { useContext } from "react";
import UserContext from "./UserContext";

const useUser = () => {
  const { userId } = useContext(UserContext); // Certifique-se de que o valor do contexto do usuário está sendo atribuído corretamente
  return { userId }; // Retorne um objeto com a propriedade userId definida
};

export default useUser;
