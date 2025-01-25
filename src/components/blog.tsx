import { FC } from "react";

const Blog: FC = () => {
  return (
    <div className="relative h-screen pt-24">
      <div className="absolute -top-10 right-10 -z-10 translate-x-1/2 -rotate-15 blur-sm">
        <div
          className="h-0 w-0"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "radial-gradient(at 25% 25%, transparent, #438AFF)",
            width: "300px",
            height: "250px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
