import { updateProfile } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { signUp, signIn } from "utils/firebase-auth";
import { UserCredentials, SetAuthState } from "types/auth";

export async function createUser(
  { email, password, username }: UserCredentials,
  setAuthState: SetAuthState,
) {
  try {
    const { user } = await signUp(email, password);
    await updateProfile(user, { displayName: username });

    if (user.displayName) {
      const username = user.displayName;
      localStorage.setItem("username", username);

      setAuthState((prevState) => {
        return {
          ...prevState,
          username,
        };
      });
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorName = error.code;

      console.log(errorName);
      setAuthState((prevState) => {
        return {
          ...prevState,
          error: errorName,
        };
      });
    }
  }
}

export async function login({ email, password }: UserCredentials, setAuthState: SetAuthState) {
  try {
    const { user } = await signIn(email, password);

    if (user.displayName) {
      const username = user.displayName;

      localStorage.setItem("username", username);
      setAuthState((prevState) => {
        return {
          ...prevState,
          username,
        };
      });
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorName = error.code;

      console.log(errorName);
      setAuthState((prevState) => {
        return {
          ...prevState,
          error: errorName,
        };
      });
    }
  }
}

export function logout() {}
