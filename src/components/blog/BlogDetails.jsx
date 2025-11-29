import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/images/Blog/image 523.webp";
import img2 from "../../assets/images/Blog/image 524.webp";
import img3 from "../../assets/images/Blog/image 525.webp";
import "./BlogDetails.css";


const blogs = [
  {
    img: img1,
    title: "Copper Clad Aluminium Busbars: The Best of Both Worlds",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam non lacinia lorem. Duis ornare fermentum lorem, 
      sed scelerisque eros fermentum id.
    `,
  },
  {
    img: img2,
    title: "Revolutionizing Power with Laminated Copper Busbars",
    content: `
      This is the full content for blog 2. Add your paragraph here.
    `,
  },
  {
    img: img3,
    title: "Efficiency in Every Amp: The Copper Busbar Advantage",
    content: `
      This is the full content for blog 3. Add more paragraphs here.
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  return (
   <>
   
    <section className="blog-details">

        <h1 className="blog-details-title">{blog.title}</h1>
      <div className="blog-details-image">
        <img src={blog.img} alt="Blog banner" />
      </div>

      {/* <h1 className="blog-details-title">{blog.title}</h1> */}

      <p className="blog-details-content">{blog.content}</p>
    </section> 
 
     </>
  );
};

export default BlogDetails;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./BlogDetails.css";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/blogs/${slug}`)
//       .then((res) => res.json())
//       .then((data) => setBlog(data))
//       .catch((err) => console.log(err));
//   }, [slug]);

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <section className="blog-details">
//       <h1 className="blog-details-title">{blog.title}</h1>

//       <div className="blog-details-image">
//         <img src={blog.image} alt={blog.title} />
//       </div>

//       <div
//         className="blog-details-content"
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />
//     </section>
//   );
// };

// export default BlogDetails;
