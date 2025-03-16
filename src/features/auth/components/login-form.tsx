import { useState } from "react";
import { useLogin } from "../state";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useLogin();

  const handleSubmit = () => {
    mutation.mutate({ email, password });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />

      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
