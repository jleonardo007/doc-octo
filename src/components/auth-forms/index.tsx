import { Link } from "react-router-dom";
import { AuthFormsProps } from "types/auth";
import { handleSignInSubmit, handleSignUpSubmit } from "handlers/auth-forms";
import "./styles.css";

export function SignUp({ createUser }: AuthFormsProps) {
  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={(e) => handleSignUpSubmit(e, createUser)}>
        <div className="form-control">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-control">
          <input type="text" name="username" placeholder="Your Github user" required />
        </div>
        <div className="form-control">
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </div>
        <div className="form-control">
          <Link to="/" className="create-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export function Login({ login }: AuthFormsProps) {
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={(e) => handleSignInSubmit(e, login)}>
        <div className="form-control">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-control">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
        <div className="form-control">
          <Link to="/signup" className="create-link">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
