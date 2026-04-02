import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get("/blog/approved");
        setPosts(res.data);
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
