import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFastMessage } from "../../context/modalContext";
import { UserAuthContext } from "../../context/userAuthContext";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { postAPI } from "../../http";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuarioLogado } = useContext(UserAuthContext);
  const { showMessage } = useFastMessage();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
      showMessage("Todos os campos são obrigatórios");
      return;
    }

    if (name.length < 3) {
      showMessage("O Nome deve conter ao menos 3 digitos");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      showMessage("Formato de email inválido");
      return;
    }

    if (password.length < 6) {
      showMessage("Senha deve conter ao menos 6 digitos");
      return;
    }

    const novoUsuario = {
      name,
      email,
      password,
    };

    const response = await postAPI("usuario", novoUsuario, showMessage);

    sessionStorage.setItem("token", response.access_token);

    setName("");
    setEmail("");
    setPassword("");
    setUsuarioLogado(true);
    navigate("/menu");
  };

  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Criar Conta</h2>
        <p className="subtitle">Crie já sua conta e faça seu pedido!</p>

        <form onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Nome"}
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/login">Já tenho uma conta</Link>
      </section>
    </>
  );
};
