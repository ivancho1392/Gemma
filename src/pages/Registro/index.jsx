import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShoppingCartContext } from "../../Context";

export default function Registro() {
  const context = useContext(ShoppingCartContext);
  const router = useRouter();

  // Verificar si finalProducts está vacío al cargar la página
  useEffect(() => {
    if (!context.finalProducts || context.finalProducts.length === 0) {
      router.push("/"); // Redirigir al page principal de la app
    }
  }, [context.finalProducts, router]);

  const initialFormState = {
    username: "",
    celphone: "",
    phone: "",
    email: "",
    country: "",
    department: "",
    city: "",
    addres: "",
    note: "",
    authnotifications: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");

  const handleVolver = () => {
    context.setCartProducts(context.finalProducts);
    context.setCount(context.finalProducts.length);
  };

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData(prevFormData => ({ ...prevFormData, [name]: newValue }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!context.finalProducts || context.finalProducts.length === 0) {
      setError("No hay ningún producto en la orden.");
    }

    // Verificar campos obligatorios
    if (
      !formData.username ||
      !formData.celphone ||
      !formData.email ||
      !formData.country ||
      !formData.department ||
      !formData.city ||
      !formData.addres
    ) {
      setError("Por favor complete los datos obligatorios.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Por favor ingrese un email válido.");
      return;
    }

    // Datos completos, guardar en userData
    const userData = {
      username: formData.username,
      celphone: formData.celphone,
      phone: formData.phone,
      email: formData.email,
      country: formData.country,
      department: formData.department,
      city: formData.city,
      addres: formData.addres,
      note: formData.note,
      authnotifications: formData.authnotifications,
    };

    console.log(userData);
    context.setFinalUserData(userData);

    setError(""); // Limpiar el mensaje de error si todo está correcto
    router.push("/ConfirmacionPedido");
  };

  return (
    <div>
      <Layout>
        <h1 className="text-3xl mt-8">Información</h1>
        <div className={styles.form}>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Nombre y Apellidos"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="celphone"
              placeholder="Telefono Celular / Whastapp"
              value={formData.celphone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefono Fijo (opcional)"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Pais"
              value={formData.country}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="department"
              placeholder="Departamento"
              value={formData.department}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="addres"
              placeholder="Dirección de Envio"
              value={formData.addres}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="note"
              placeholder="Datos adicionales dirección (opcional)"
              value={formData.note}
              onChange={handleInputChange}
            />
            <div className={styles.check}>
              <label>
                <input
                  type="checkbox"
                  name="authnotifications"
                  checked={formData.authnotifications}
                  onChange={handleInputChange}
                />
                Enviar novedades y ofertas por Email?
              </label>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.button1} type="submit">
              Confirmar Pedido
            </button>
            <Link href="/MyOrder">
              <button className={styles.button2} onClick={handleVolver}>
                Volver a mi Pedido
              </button>
            </Link>
          </form>
        </div>
      </Layout>
    </div>
  );
}
