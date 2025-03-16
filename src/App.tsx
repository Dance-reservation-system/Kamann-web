import "./App.css";
import { useLogin } from "@kamann/auth";

function App() {
  const loginMutation = useLogin();

  const handleClick = () => {
    loginMutation.mutate({ password: "ff", email: "aa" });
  };

  return (
    <div>
      <h1>Kamann-web</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
