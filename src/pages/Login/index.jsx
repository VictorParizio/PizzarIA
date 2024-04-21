import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import "./styles.css";

export const Login = () => {
  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Entrar</h2>
        <p className="subtitle">Que bom te ver novamente, entre e aproveite!</p>

        <form>
          <InputForm
            textLabel={"Email"}
            type="email"
            id="email"
            placeholder="Digite seu email"
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            id="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/signup">Criar uma conta</Link>
      </section>
    </>
  );
};
