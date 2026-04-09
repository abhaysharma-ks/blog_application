import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blog,setBlog]=useState()

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

  // generate blog
  const generate=async(data)=>{
    const res=await api.post("/blog/create",data)
    return res.data
  }

  // fetch blog
  const fetchBlog=async(b_id)=>{
    try {
      const res=await api.get(`blog/blogdetail/${b_id}`)
    setBlog(res.data)
    return res.data
    } catch (error) {
      console.log("error fetching single blog",error)
      setBlog(null)
    }
  }



  return (
    <PostContext.Provider value={{ post,generate,blog,fetchBlog}}>{children}</PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
