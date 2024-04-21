import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";

export const Signup = () => {
  return (
    <>
      <div className="auth-background" />
      <section className="auth-container">
        <h2>Criar Conta</h2>
        <p className="subtitle">Crie já sua conta e faça seu pedido!</p>

        <form>
          <InputForm
            textLabel={"Nome"}
            type="text"
            id="name"
            placeholder="Digite seu nome"
          />
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
          <InputForm
            textLabel={"Confirmar Senha"}
            type="password"
            id="confirmar-senha"
            placeholder="Confirme sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/login">Já tenho uma conta</Link>
      </section>
    </>
  );
};
