import { signOut } from "../../services/cognitoService"
import Layout from "../../Components/Layout";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export default function SignIn() {
    const router = useRouter();

    const handleSignOut= () => {
        signOut();
        alert("Sesion cerrada con exito");
        router.push("/AdminControlPanel");
      };

    return (
      <Layout>
        <h2>Sign Out</h2>
        <div className={styles.form}>
          <button className={styles.button1} onClick={handleSignOut}>
            Click to Sign Out
          </button>
          </div>
      </Layout>
    );
  }