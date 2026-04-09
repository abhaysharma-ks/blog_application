// import React from 'react'
// import { usePost } from '../context/PostContext'

// const Articles = () => {
//   const {post}=usePost()
//   console.log(post)
//   return (
//     <div>Articles</div>
//   )
// }

// export default Articles

import React, { useEffect } from "react";
import { usePost } from "../context/PostContext";
import Card from "../components/Card";

const Articles = () => {
  const { post } = usePost();
  useEffect(()=>{
    
  })
  console.log(post);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {post?.map((item) => (
            <Card key={item.id} article={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
