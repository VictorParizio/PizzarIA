import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { postAPI } from "../../http";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("A confirmação da senha não corresponde a senha fornecida");
    }

    try {
      const novoUsuario = {
        name,
        email,
        password,
      };

      const response = await postAPI("usuario", novoUsuario);

      sessionStorage.setItem("token", response.data.access_token);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/menu");
      return;
    } catch (error) {
      return console.log("erro ", error);
    }
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
