import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Prisijungimas</h1>
        <input
          placeholder="Vartotojas"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Slaptažodis"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Prisijungti
        </button>
        {error && <span className={styles.error}>Blogai įvesta informacija!</span>}
      </div>
    </div>
  );
};

export default Login;