import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoUsuario = {
      name,
      email,
      password,
      confirmPassword,
    };

    if (password != confirmPassword) {
      return alert("A confirmação da senha não corresponde a senha fornecida");
    }

    axios
      .post("http://localhost:3000/pizzaria/usuario", novoUsuario)
      .then((resposta) => {
        alert(resposta.data.message);
        sessionStorage.setItem("token", resposta.data.access_token);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/menu");
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert("Algo deu errado");
        }
      });
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
          <InputForm
            textLabel={"Confirmar Senha"}
            type="password"
            id="confirm-password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/login">Já tenho uma conta</Link>
      </section>
    </>
  );
};
