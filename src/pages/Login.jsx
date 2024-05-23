import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuthContext } from "../context/userAuthContext";
import { MessageContext } from "../context/modalContext";

import { InputForm } from "../components/InputForm";
import { Button } from "../components/Button";
import { postAPI } from "../http";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuarioLogado } = useContext(UserAuthContext);
  const { showMessage } = useContext(MessageContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      showMessage("Todos os campos são obrigatórios");
      return;
    }

    const usuario = {
      email,
      password,
    };

    try {
      const response = await postAPI("login", usuario, showMessage);
      sessionStorage.setItem("token", response.access_token);
      setEmail("");
      setPassword("");
      setUsuarioLogado(true);
      navigate("/menu");
    } catch (error) {
      showMessage(
        "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Entrar</h2>
        <p className="subtitle">Que bom te ver novamente, entre e aproveite!</p>
        <form onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Email"}
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/signup">Criar uma conta</Link>
      </section>
    </>
  );
};
