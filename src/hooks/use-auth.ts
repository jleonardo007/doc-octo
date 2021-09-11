import { useState, useEffect, useLayoutEffect } from "react";
import { AuthState, UserCredentials } from "types/auth";
import { createUser, login } from "handlers/auth";

const initialState: AuthState = {
  username: "",
  error: "",
};

export default function useAuth() {
  const [authState, setAuthState] = useState(initialState);

  useLayoutEffect(() => {
    const username = localStorage.username;

    if (username)
      setAuthState((prevState) => {
        return {
          ...prevState,
          username,
        };
      });
  }, []);

  useEffect(() => {
    if (authState.error)
      setTimeout(() => {
        setAuthState((prevState) => {
          return {
            ...prevState,
            error: "",
          };
        });
      }, 2000);
  });

  return {
    username: authState.username,
    error: authState.error,
    createUser: (formData: UserCredentials) => {
      createUser(formData, setAuthState);
    },
    login: (formData: UserCredentials) => {
      login(formData, setAuthState);
    },
  };
}
