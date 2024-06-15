import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MessageContext } from "../context/modalContext";
import { InputForm } from "../components/InputForm";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { postAPI } from "../http";
import { login } from "../redux/user/slice";

export const Signup = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;
  const { showMessage } = useContext(MessageContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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

      const response = await postAPI("user", formValues, showMessage);
      sessionStorage.setItem("token", response.access_token);
      dispatch(login(true));
      navigate("/menu");
    } catch (error) {
      if (error?.response?.data?.message) {
        showMessage(error.response.data.message);
      } else {
        console.log("Erro do lado do servidor: " + error);
      }
      throw error;
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
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Email"}
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handleInputChange}
          />
          <Button type="submit" aria-label="Enviar formulário de cadastro">
            Cadastrar
          </Button>
        </form>

        <Link to="/login">Já tenho uma conta</Link>
      </section>
    </>
  );
};
