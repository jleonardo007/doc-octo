import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "components/auth";
import Home from "components/home";
import NavBar from "components/nav-bar";
import Profile from "components/profile";
import FavoriteRepos from "components/favorite-repos";
import { SignUp, Login } from "components/auth-forms";
import SearchBar from "components/search-bar";
import useAuth from "hooks/use-auth";
import useGithubUser from "hooks/use-github-user";

export default function App() {
  const { username, error, createUser, login, logOut } = useAuth();
  const { user, repoSearch, searchRepo } = useGithubUser(username);

  return username ? (
    <Router basename="/">
      <Switch>
        <Route path="/profile">
          <Profile NavBar={<NavBar />} user={user} logOut={logOut} />
        </Route>
        <Route path="/favorite-repos">
          <FavoriteRepos NavBar={<NavBar />} />
        </Route>
        <Route path="/">
          <Home
            username={username}
            repositories={user.repositories.nodes}
            query={repoSearch.query}
            repos={repoSearch.repos}
            NavBar={<NavBar SearchBar={<SearchBar searchRepo={searchRepo} />} />}
          />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router basename="/">
      <Switch>
        <Route path="/signup">
          <Auth AuthForm={<SignUp createUser={createUser} />} error={error} />
        </Route>
        <Route path="/">
          <Auth AuthForm={<Login login={login} />} error={error} />
        </Route>
      </Switch>
    </Router>
  );
}
