import { Dispatch, ReactNode, SetStateAction } from "react";

export type UserCredentials = {
  email: string;
  password: string;
  username: string;
};

export type AuthProps = {
  AuthForm: ReactNode;
  error: string;
};

export type AuthFormsProps = {
  [key: string]: (formData: UserCredentials) => void;
};

export type AuthState = {
  username: string;
  error: string;
};

export type FormEvent = React.FormEvent<HTMLFormElement>;

export interface Credentials extends UserCredentials {
  [key: string]: FormDataEntryValue;
}

export type SetAuthState = Dispatch<SetStateAction<AuthState>>;
