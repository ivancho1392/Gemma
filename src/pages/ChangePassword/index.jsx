import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Layout from "../../Components/Layout";
import { changePassword } from "../../services/cognitoService";

export default function ChangePassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { username, password } = router.query;

  const handleNewPasswordChange = event => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    //verificar que las dos contraseñas sean iguales
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    //Verificar las restricciones de AWS
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!passwordRegex.test(newPassword)) {
      setError(
        "La contraseña no cumple con los requisitos: debe tener al menos una letra minúscula, una letra mayúscula, un carácter especial, un número y tener entre 8 y 15 caracteres",
      );
      return;
    }

    setError("");

    try {
      await changePassword(username, password, newPassword);
      alert("Contraseña Actualizada con Exito");
      router.push("/AdminControlPanel");
    } catch (error) {
      setError(
        "Error al cambiar la contraseña. Por favor, inténtalo nuevamente.",
      );
    }
  };

  return (
    <Layout>
      <div className={styles.form}>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div>
            <label className="block mb-1">New Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button className={styles.button2}  onClick={handleTogglePassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </Layout>
  );
}
