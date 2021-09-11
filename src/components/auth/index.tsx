import { AuthProps } from "types/auth";
import "./styles.css";

export default function Auth({ AuthForm, error }: AuthProps) {
  return (
    <section className="auth">
      <h1 className="app-title">Doc Octo</h1>
      <p className="description">Grab your GitHub repos at one site</p>
      {error && <span className="error-message">{error.replace("auth/", "")}</span>}
      {AuthForm}
    </section>
  );
}
