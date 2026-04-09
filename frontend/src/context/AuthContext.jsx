import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/user/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  //  LOGIN
  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });

    setUser(res.data.user);
    console.log(res.data.user)
    return res.data.user;
  };

  //  REGISTER
  const register = async (data) => {
    const res = await api.post("/auth/register", data);

    // setUser(res.data.user);
    return res.data.user;
  };

  //  LOGOUT
  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);