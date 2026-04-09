import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const res = await api.get("/blog/allPending");
        setPending(res.data);
        console.log(pending)
      } catch (error) {
        console.log(error)
        setPending([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPending();
  }, []);

  const approve=async(id)=>{
    const res = await api.patch(`/blog/approve/${id}`)
    setPending((prevPending) => prevPending.filter((blog) => blog.id !== id));
    return res.data
  }

  return (
    <AdminContext.Provider value={{ pending, approve}}>{children}</AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
