import SignUp from "./components/auth/register";
import SignIn from "./components/auth/login";
import ThemeToggler from "./components/themeToggler";

function App() {
  return (
    <div>
      <SignUp />
      <ThemeToggler />
      <SignIn />
    </div>
  );
}

export default App;
