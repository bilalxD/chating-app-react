import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    const success = HandleInputError(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.error);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data)
          localStorage.setItem("chat-user", JSON.stringify(data));
          setAuthUser(data);
          console.log(data);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function HandleInputError(userName, password) {
  if (!userName || !password) {
    toast.error("Please fill the all fields");
    return false;
  }
  return true;
}
