import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { signIn } from "../../services/cognitoService"

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      const result = await signIn(username, password);
      alert("Inicio de sesión exitoso:", result);
    if (result.newPasswordRequired) {
      alert("Nueva contraseña requerida")
      router.push({
        pathname: '/ChangePassword',
        query: { username, password },
      });
    } else {
      router.push("/AdminControlPanel");
    }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.code === "NotAuthorizedException") {
        setError("Contraseña o usuario incorrecto. Por favor, inténtalo nuevamente.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <Layout>
      <h2>Sign In</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className={styles.button2}  onClick={handleTogglePassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <button className={styles.button1}  onClick={handleSignIn}>Sign In</button>
        {error && <p>{error}</p>} 
      </div>
    </Layout>
  );
}
