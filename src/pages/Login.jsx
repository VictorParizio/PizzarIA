import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MessageContext } from "../context/modalContext";

import { InputForm } from "../components/InputForm";
import { Button } from "../components/Button";
import { login } from "../redux/user/slice";
import { useForm } from "../hooks/useForm";
import { postAPI } from "../http";

export const Login = () => {
  const [formValues, handleInputChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;
  const { showMessage } = useContext(MessageContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      showMessage("Todos os campos são obrigatórios");
      return;
    }

    try {
      const response = await postAPI("login", formValues, showMessage);
      sessionStorage.setItem("token", response.access_token);
      dispatch(login(true));
      navigate("/menu");
    } catch (error) {
      if (error.response.data.message) {
        return showMessage(error.response.data.message);
      }
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
            name="email"
            value={email}
            placeholder="Digite seu email"
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            name="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={handleInputChange}
          />

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/signup">Criar uma conta</Link>
      </section>
    </>
  );
};
