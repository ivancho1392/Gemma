import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import { useRouter } from "next/router";
import { isAuthenticated } from "../../services/cognitoService";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!isAuthenticated()) {
      // Si no está autenticado, redirigir al inicio de sesión
      router.push("/SignIn");
    }
  }, [router]); // Incluye 'router' en el arreglo de dependencias

  return (
    <>
      <Layout>
        <h1 className='text-3xl mt-8'>Panel de Control</h1>
      </Layout>
    </>
  );
}