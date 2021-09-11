import { UserCredentials, Credentials, FormEvent } from "types/auth";

export function handleSignUpSubmit(e: FormEvent, createUser: (formData: UserCredentials) => void) {
  e.preventDefault();

  const userCredentials: Credentials = {
    email: "",
    password: "",
    username: "",
  };

  const fd = new FormData(e.currentTarget);

  for (const [key, value] of fd.entries()) {
    userCredentials[key] = value;
  }

  createUser(userCredentials);
}

export function handleSignInSubmit(e: FormEvent, login: (formData: UserCredentials) => void) {
  e.preventDefault();

  const userCredentials: Credentials = {
    email: "",
    password: "",
    username: "",
  };
  const fd = new FormData(e.currentTarget);

  for (const [key, value] of fd.entries()) {
    userCredentials[key] = value;
  }

  login(userCredentials);
}
